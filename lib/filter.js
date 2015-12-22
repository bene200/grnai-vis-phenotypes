var Backbone = require("backbone");
var _ = require("underscore");
var $ = jQuery = require("jquery");

var icons = require("./icons.js");

module.exports = Backbone.View.extend({
  events: {
    "click .phenobtn": "phenoClick",
    "keyup #search": "findGene",
    "click #vis-refresh": "refreshVis",
    "click #vis-export": "exportVis"
  },
  initialize: function(opts){
    this.el = opts.el;
    this.cy = opts.cy;
    this.initFilterMenu();
    this.render();
  },
  initFilterMenu: function(){
    var filterDiv = document.createElement("div");

    //set some styles
    filterDiv.className = "col-md-2";
    filterDiv.style.zIndex = 1002;

    //insert into main div
    this.el.insertBefore(filterDiv, this.el.childNodes[0]);
    this.menuEl = filterDiv;
  },
  render: function(){
    var phenoNodes = this.cy.$(".phenotype"),
        html;

    //build html string
    html = [
      "<ul class='sidebar-nav' style='list-style: none; padding-left: 0px;'>",
      "  <li class='sidebar-brand'>",
      "    <h4>Find and filter</h4>",
      "  </li>",
      "  <li>",
      "    <button type='button' class='btn btn-default' aria-label='left-align' style='outline: none;'>",
      "      <span id='vis-refresh' aria-hidden='true' style='height: 15px; width: 15px;'></span>",
      "    </button>",
      "    <button type='button' class='btn btn-default' aria-label='left-align' style='outline: none;'>",
      "      <span id='vis-export' aria-hidden='true' style='height: 15px; width: 15px;'></span>",
      "    </button>",
      "  </li>",
      "  <li>",
      "    <input type='text' placeholder='Find gene' id='search' aria-describedby='inputSuccess4Status' style='width: 80%;'>",
      "  </li>"
    ];

    //add button for each phenotype
    for(var i=0; i<phenoNodes.length; i++){
      html = html.concat([
        "<li>",
        "  <button type='button' class='btn btn-default phenobtn' style='margin: 5px; width: 80%; white-space: normal; outline: none;'>",
             phenoNodes[i].data().name,
        "  </button>",
        "</li>"
      ]);
    }

    html = html.concat([
      "</ul>"
    ]);

    //add html content to the element
    this.menuEl.innerHTML = html.join("\n");

    //set some css
    this.setImage(document.getElementById("vis-refresh"), icons.refresh);
    this.setImage(document.getElementById("vis-export"), icons.download2);
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
        self = this;

    //change button colour
    if(ele.style.backgroundColor === ""){
      ele.style.backgroundColor = "#2A5518";
      ele.style.color = "#fff";
    } else {
      ele.style.backgroundColor = "";
      ele.style.color = "#444";
    }

    //get all the green buttons
    var phenoButtons = document.getElementsByClassName("phenobtn");
    var greenbtns = _.filter(phenoButtons, function(el){
      return el.style.backgroundColor !== "";
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
    selected.length > 0 ? self.cy.fit(selected) : self.cy.fit(self.cy.elements());
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
