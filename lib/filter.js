var Backbone = require("backbone");
var _ = require("underscore");
var $ = require("jquery");

var icons = require("./icons.js");
var Alertbox = require("./alertbox");

module.exports = Backbone.View.extend({
  events: {
    "click .phenobtn": "phenoClick",
    "keyup #search": "findGene",
    "click #vis-refresh-btn": "refreshVis",
    "click #vis-export-btn": "exportVis"
  },
  initialize: function(opts){
    this.el = opts.el;
    this.cy = opts.cy;
    this.expId = opts.expId;
    this.alertBox = null;

    this.initFilterMenu();
    this.render();
  },
  initFilterMenu: function(){
    var filterDiv = document.createElement("div");

    //set some styles
    filterDiv.className = "col-md-2";
    filterDiv.style.height = "800px";
    filterDiv.style.zIndex = 1002;
    filterDiv.style.borderRight = "1px solid";
    filterDiv.style.borderColor = "#cccccc";

    //insert into main div
    this.el.insertBefore(filterDiv, this.el.childNodes[0]);
    this.menuEl = filterDiv;
  },
  render: function(){
    let phenoNodes = this.cy.$(".phenotype"),
        html;

    //build html string
    html = `
      <ul class='sidebar-nav' style='list-style: none; padding-left: 0px;'>
        <li class='sidebar-brand'>
          <h4>Find and filter</h4>
        </li>
        <li>
          <div id='vis-alert-box' style='width: 80%;'></div>
        </li>
        <li>
          <button type='button' id='vis-refresh-btn' class='btn btn-default' aria-label='left-align' style='outline: none;'>
            <span id='vis-refresh' aria-hidden='true' style='height: 15px; width: 15px;'></span>
          </button>
          <button type='button' id='vis-export-btn' class='btn btn-default' aria-label='left-align' style='outline: none;'>
            <span id='vis-export' aria-hidden='true' style='height: 15px; width: 15px;'></span>
          </button>
        </li>
        <li>
          <input type='text' placeholder='Find gene' id='search' aria-describedby='inputSuccess4Status' style='width: 80%;'>
        </li>
      </ul>
    `;

    //add button for each phenotype in a scrollable div
    window.but = phenoNodes;
    const buttons = phenoNodes.map(pn => {
      return `
        <li>
          <div class='row'>
            <div class='col-md-8'>
              <button type='button' class='btn btn-default phenobtn' style='margin: 5px; width: 100%; white-space: normal; outline: none;'>
                ${pn.data().name}
              </button>
            </div>
            <div class='col-md-4'>
              <ul style="list-style-type: none; padding-left: 0px;">
                <li><a href="http://www.genomernai.org/v16/uniprotLinkout/${encodeURI(pn.data().name)}/${this.expId}" style='font-size: 8; color: #5cb534'
                  title="Get a list of mapped UniProtIDs as *.txt. If you want to submit the list to string-db.org, copy and paste the UniProtIDs into their 'multiple names' text field. NOTE: The number of UniProtIDs may well exceed the number of genes indicated for this phenotype, due to multiple mappings."
                >StringDB</a></li>
                <li><a href="http://www.genomernai.org/v16/download/phenotypes/uniprot/${encodeURI(pn.data().name)}/${this.expId}" style='font-size: 8; color: #5cb534'
                  title="Send a list of UniProtIDs directly to string-db.org. There is a limit on the number of characters for the computed transfer string (2000), so if your list exceeds around 400 IDs you will have to manually extract and submit the list. NOTE: The number of UniProtIDs may well exceed the number of genes indicated for this phenotype, due to multiple mappings."
                >UniprotIDs</a></li>
              </ul>
            </div>
          </div>
        </li>
      `;
    }).join('\n');

    html += `
      <div style='width: 100%; height: 500px; overflow-y: auto; overflow-x: hidden;'>
        <ul style='list-style: none; padding-left: 0px'>
          ${buttons}
        </ul>
      </div>
    `;

    //add html content to the element
    this.menuEl.innerHTML = html;

    //set some css
    this.setImage(document.getElementById("vis-refresh"), icons.refresh);
    this.setImage(document.getElementById("vis-export"), icons.download2);

    //set alert box
    this.alertBox = new Alertbox({
      el: document.getElementById("vis-alert-box")
    });
  },
  findGene: function(){
    var text = document.getElementById("search").value;

    if(text){
      var gene = this.cy.nodes("[symbols@='" + text + "']");
      if(gene.length > 0){
        //highlight and zoom to node
        gene.addClass("highlight");
        gene.connectedEdges().addClass("highlight");
        this.cy.zoom({
          level: 2.5,
          position: gene.position()
        });
        this.cy.center(gene);
      } else {
        this.cy.elements().removeClass("highlight");
      }
    }
  },
  phenoClick: function(evt){
    var evt = evt || window.event,
        ele = evt.toElement || evt.originalEvent.target,
        self = this,
        btnCol = "rgb(42, 85, 24)";

    //change button colour
    if(ele.style.backgroundColor === ""){
      ele.style.backgroundColor = btnCol;
      ele.style.color = "#fff";
    } else {
      ele.style.backgroundColor = "";
      ele.style.color = "#444";
    }

    //get all the green buttons
    var phenoButtons = document.getElementsByClassName("phenobtn");
    var greenbtns = _.filter(phenoButtons, function(el){
      return el.style.backgroundColor === btnCol;
    });

    //for each button get all connected nodes
    var nodes = _.chain(greenbtns)
      .map(function(el){
        var phenoNode = self.cy.nodes("[name='" + el.innerHTML.trim() + "']");
        return phenoNode.incomers().nodes();
      })
      .map(function(els){
        return _.map(els, function(x){ return x.id(); });
      })
      .value();

    //get intersections between the identifier lists
    var inter = _.intersection.apply(this, nodes);

    //remove old highlighting
    self.cy.nodes().removeClass("phenoclicked");

    //highlight all the nodes
    var selected = [];
    _.each(inter, function(el){
      selected.push(self.cy.$("#" + el)[0]);
    });
    selected = self.cy.collection(selected);
    selected.addClass("phenoclicked");

    //set viewport and alert box
    if(selected.length > 0 && greenbtns.length > 0){
      self.cy.fit(selected);
      this.alertBox.setBox("success", selected.length + " overlapping genes.");
    } else if(greenbtns.length === 0){
      self.cy.fit(selected);
      this.alertBox.setBox("notice", "No phenotypes selected.");
    } else {
      self.cy.fit(self.cy.elements());
      this.alertBox.setBox("error", "No overlapping genes.");
    }
  },
  refreshVis: function(){
    this.cy.fit(this.cy.elements());
  },
  exportVis: function(){
    var png64,
        newTab,
        cy = this.cy;

    //prepare vis and create export
    cy.nodes().css("min-zoomed-font-size", 0);
    png64 = this.cy.png({scale: 4});
    cy.nodes().css("min-zoomed-font-size", 4);

    //download
    var a = document.createElement("a");
    a.id = "download-tmp";
    document.body.appendChild(a);

    $("#download-tmp").on("click", function(){
      $(this).attr("href", png64)
        .attr("download", "grnai-visualisation.png");
      $(this).css("display", "none");
    });

    a.click();
    document.body.removeChild(a);
  },
  setImage: function(el, base64){
    var id = "#" + el.id;
    $(id).css("background-image", base64);
    $(id).css("background-size", "contain");
    $(id).css("display", "block");
  }
});
