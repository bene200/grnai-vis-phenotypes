var Backbone = require("backbone");
var _ = require("underscore");

module.exports = Backbone.View.extend({
  events: {
    "click .phenobtn": "phenoClick"
  },
  initialize: function(opts){
    this.el = opts.el;
    this.cy = opts.cy;
    this.initFilterMenu();
    this.render();
  },
  initFilterMenu: function(){
    var filterDiv = document.createElement("div");
    //set styles
    filterDiv.height = "15%";
    filterDiv.width = "100%";
    //inser into main div
    this.el.insertBefore(filterDiv, this.el.childNodes[0]);
    this.menuEl = filterDiv;
  },
  render: function(){
    var phenoNodes = this.cy.$(".phenotype");
    var html = "";
    //add button for each phenotype
    for(var i=0; i<phenoNodes.length; i++){
      html += '<button type="button" class="btn btn-default phenobtn" style="margin: 5px;">'
          + phenoNodes[i].data().name
          + '</button>'
    }
    this.menuEl.innerHTML = html;
  },
  phenoClick: function(evt){
    var ele = evt.toElement;
    var self = this;
    if(ele.style.backgroundColor === ""){
      ele.style.backgroundColor = "#5cb534";
      ele.style.color = "#fff";
    } else {
      ele.style.backgroundColor = "";
      ele.style.color = "#444";
    }
    var phenoButtons = document.getElementsByClassName("phenobtn");
    console.log(phenoButtons);
    var greenbtns = _.filter(phenoButtons, function(el){
      return el.style.backgroundColor !== "";
    });
    console.log(greenbtns);
    var nodes = _.map(greenbtns, function(el){
      var phenoNode = self.cy.nodes("[name='" + el.innerHTML + "']");
      var ognodes = phenoNode.outgoers().nodes();
      var ids = [];
      _.each(ognodes, function(x){ ids.push(x.id()); });
      return ids;
    });
    console.log(nodes);
    // debugger;
    var inter = _.intersection.apply(this, nodes);
    console.log(inter);
    self.cy.nodes().removeClass("highlight");
    _.each(inter, function(el){ self.cy.$("#" + el).addClass("highlight"); })
  //   var pheno = ele.innerHTML;
  //   var phenoNode = this.cy.nodes("[name='" + pheno + "']");
  //   var outgoers = phenoNode.outgoers();
  //   var ognodes = outgoers.nodes();
  //   var ogedges = outgoers.edges();
  //   if(ele.style.backgroundColor === ""){
  //     ogedges.addClass("highlight");
  //     ognodes.each(function(i, el){
  //       var edges = el.connectedEdges();
  //       var vis = _.find(edges, function(e){ return e.hasClass("highlight"); });
  //       el.addClass("highlight");
  //     });
  //     ele.style.backgroundColor = "#5cb534";
  //   } else {
  //     ogedges.removeClass("highlight");
  //     ognodes.each(function(i, el){
  //       var edges = el.connectedEdges();
  //       var vis = _.find(edges, function(e){ return e.hasClass("highlight"); });
  //       if(!vis){
  //         el.removeClass("highlight");
  //       }
  //     });
  //     ele.style.backgroundColor = "";
  //   }
  }
});
