var Backbone = require("backbone");
var _ = require("underscore");

module.exports = Backbone.View.extend({
  events: {
    "click .phenobtn": "phenoClick",
    "keyup #search": "findGene"
  },
  initialize: function(opts){
    this.el = opts.el;
    this.cy = opts.cy;
    this.initFilterMenu();
    this.render();
  },
  initFilterMenu: function(){
    var filterDiv = document.createElement("div");
    filterDiv.className = "col-md-2";
    filterDiv.style.zIndex = 1002;
    //insert into main div
    this.el.insertBefore(filterDiv, this.el.childNodes[0]);
    this.menuEl = filterDiv;
  },
  render: function(){
    var phenoNodes = this.cy.$(".phenotype");
    var html = "<ul class='sidebar-nav' style='list-style: none; padding-left: 0px;'>";
    html += "<li class='sidebar-brand'><h4>Find and filter</h4></li>";
    //add search bar
    html += '<li><input type="text" placeholder="Find gene" id="search" \
            aria-describedby="inputSuccess4Status" style="width: 100%;"></li>';
    //add button for each phenotype
    for(var i=0; i<phenoNodes.length; i++){
      html += '<li><button type="button" class="btn btn-default phenobtn" style="margin: 5px; width: 100%; white-space: normal; outline: none;">'
          + phenoNodes[i].data().name
          + '</button></li>'
    }
    html += "</ul>";
    this.menuEl.innerHTML = html;
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
        this.cy.nodes().removeClass("highlight");
        this.cy.edges().removeClass("highlight");
      }
    }
  },
  phenoClick: function(evt){
    var ele = evt.toElement;
    var self = this;
    //change button colour
    if(ele.style.backgroundColor === ""){
      ele.style.backgroundColor = "#5cb534";
      ele.style.color = "#fff";
    } else {
      ele.style.backgroundColor = "";
      ele.style.color = "#444";
    }
    var phenoButtons = document.getElementsByClassName("phenobtn");
    //get all the green buttons
    var greenbtns = _.filter(phenoButtons, function(el){
      return el.style.backgroundColor !== "";
    });
    //for each button get all connected nodes
    var nodes = _.map(greenbtns, function(el){
      var phenoNode = self.cy.nodes("[name='" + el.innerHTML + "']");
      var ognodes = phenoNode.incomers().nodes();
      var ids = [];
      _.each(ognodes, function(x){ ids.push(x.id()); });
      return ids;
    });
    //get intersections between the identifier lists
    var inter = _.intersection.apply(this, nodes);
    //remove old highlighting
    self.cy.nodes().removeClass("highlight");
    //highlight all the nodes
    _.each(inter, function(el){ self.cy.$("#" + el).addClass("highlight"); })
  }
});
