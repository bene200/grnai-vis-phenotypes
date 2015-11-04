/*
 * grnai-vis-phenotypes
 * https://github.com/bene200/grnai-vis-phenotypes
 *
 * Copyright (c) 2015 Benedikt Rauscher
 * Licensed under the MIT license.
 */

var Backbone = require("backbone");
var cytoscape = require("cytoscape");
var _ = require("underscore");

module.exports = grnaivisphenotypes = Backbone.View.extend({
  initialize: function(opts){
    this.el = opts.el;
    this.d = opts.d;
    this.render();
  },
  render: function(){
    var self = this;
    this.el.style.position = "absolute";
    this.el.style.width = "100%";
    this.el.style.height = "100%";
    var div = document.createElement("div");
    div.style.position = "fixed";
    div.style.backgroundColor = "#fff";
    div.style.textAlign = "center";
    div.style.display = "none";
    div.style.border = "1px solid #444";
    div.style.color = "#fff";
    div.style.fontWeight = "bold";
    div.style.overflow = "auto";
    div.style.zIndex = 1002;
    div.style.padding = "10px";
    div.style.borderRadius = "5px";
    div.id = "label";
    this.el.appendChild(div);
    var cy = cytoscape({
      container: this.el,
      style: cytoscape.stylesheet()
        .selector("node")
          .css({
            "color": "#fff",
            'text-valign': 'center',
            'text-outline-width': 3,
            'text-outline-color': "#444"
          })
        .selector(".phenotype")
          .css({
            "content": "data(name)",
  					"font-size": 25,
  					"background-color": "#5cb534",
            "opacity": 1,
          })
        .selector(".gene")
          .css({
            "content": "data(id)",
  					"font-size": 18,
            "background-color": "#D0D0D0",
          })
        .selector("edge")
          .css({
            "width": 3,
						"line-color": "black",
            "opacity": 0.2
          })
        .selector(".highlight")
          .css({
            "background-color": "steelblue",
            "line-color": "steelblue",
            "opacity": 1
          }),
      elements: this.d,
      ready: function(){
        cy.$(".gene").each(function(i, el){
          el.style("width", el.degree()*25);
          el.style("height", el.degree()*25)
        })
        cy.$(".phenotype").each(function(i, el){
          el.style("width", el.degree()*4);
          el.style("height", el.degree()*4)
        })
        this.layout({
          name: "cose",
          nodeOverlap: 50,
          idealEdgeLength: 10
        });

        var label = document.getElementById("label");
        // this.on("tapdragover", "node", function(evt){
        //   var left  = this.renderedPosition().x + 20 + "px";
        //   var top  = this.renderedPosition().y - 20 + "px";
        //   label.style.left = left;
        //   label.style.top = top;
        //   label.innerHTML = self.geneInfoAsHTML(this);
        //   label.style.display = "block";
        // });
        // this.on("tapdragout", "node", function(evt){
        //   label.style.display = "none";
        // });
      }
    });
    cy.on("tapdragover", ".gene", function(){
      this.addClass("highlight");
      this.incomers().each(function(i, el){
        el.addClass("highlight");
      });
    });
    cy.on("tapdragout", ".gene", function(){
      this.removeClass("highlight");
      this.incomers().each(function(i, el){
        el.removeClass("highlight");
      });
    });
    cy.on('tap', '.phenotype', function(){
      var outgoers = this.outgoers();
      var ognodes = outgoers.nodes();
      var ogedges = outgoers.edges();
      ogedges[0].visible() ? ogedges.style("visibility", "hidden")
                          : ogedges.style("visibility", "visible");
      ognodes.each(function(i, el){
        var hide = true;
        var edges = el.connectedEdges();
        var vis = _.find(edges, function(e){ return e.style("visibility") === "visible"; });
        vis ? el.style("visibility", "visible") : el.style("visibility", "hidden");
      });
    });
  },
  geneInfoAsHTML: function(node){
    var html = "<table class='table table-striped' style='width:100%'>";
    //mapped id
    html += "<tr><td>Mapped Id</td><td>" + node.data().mappedId + "</td></tr>";
    //gene id
    html += "<tr><td>Gene Id</td><td>" + node.data().geneId + "</td></tr>";
    //reagend ids
    html += "<tr><td>Reagent Ids</td><td>"
    var rids = node.data().reagentId
    for(var i=0; i<rids.length; i++){
      i === rids.length-1 ? html += rids[i] : html += rids[i] + ", ";
    }
    html += "</td></tr>";
    //score type
    html += "<tr><td>Score Type</td><td>" + node.data().scoreType + "</td><tr>";
    //cut off
    html += "<tr><td>Cutoff</td><td>" + node.data().cutoff + "</td><tr>";
    html += "</table>";
    return html;
  }
});
