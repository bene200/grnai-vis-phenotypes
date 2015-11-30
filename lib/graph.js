var Backbone = require("backbone");
var cytoscape = require("cytoscape");
var $ = jQuery = require("jquery");
var _ = require("underscore");

var GraphModel = require("./graphmodel");

module.exports = Backbone.View.extend({
  initialize: function(opts){
    this.el = opts.el;
    this.info = opts.info;
    this.model = opts.model;
    this.initCyElement();
    this.render();
  },
  initCyElement: function(){
    var cyEl = document.createElement("div");
    //set styles
    cyEl.style.position = "relative";
    cyEl.style.width = "100%";
    cyEl.style.height = "85%";
    cyEl.style.zIndex = 9;
    //append to main div
    this.el.appendChild(cyEl);
    this.cyEl = cyEl;
  },
  render: function(){
    var self = this;
    var cy = cytoscape({
      container: self.cyEl,
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
            "opacity": 0.95,
            "width": 200,
            "height": 200,
            "shape": "star"
          })
        .selector(".gene")
          .css({
            "content": "data(symbols)",
  					"font-size": 18,
            "background-color": "#444",
            width: 100,
            height: 100
          })
        .selector("edge")
          .css({
            "width": 3,
			      "line-color": "#D0D0D0",
            "opacity": 1
          })
        .selector(".highlight")
          .css({
            "background-color": "steelblue",
            "line-color": "steelblue",
            "opacity": 1
          }),
      elements: self.model.toCytoscape(),
      ready: function(){
        //define layout
        this.layout({
          name: "cose",
          nodeOverlap: 100,
          idealEdgeLength: 70
        });
      }
    });
    //set cy element as instance variable for this view
    this.cy = cy;
    this.defineCytoscapeEvents();
  },
  defineCytoscapeEvents: function(){
    var self = this,
        cy = self.cy;
    //highlight connected edges and nodes on mouseover
    cy.on("tapdragover", ".gene", function(){
      this.addClass("highlight");
      this.outgoers().each(function(i, el){
        el.addClass("highlight");
      });
    });
    cy.on("tapdragout", ".gene", function(){
      this.removeClass("highlight");
      this.outgoers().each(function(i, el){
        el.removeClass("highlight");
      });
    });
    //hide and display information on phenotype node click
    cy.on('tap', '.phenotype', function(){
      var incomers = this.incomers();
      var ognodes = incomers.nodes();
      var ogedges = incomers.edges();
      ogedges[0].visible() ? ogedges.style("visibility", "hidden")
                          : ogedges.style("visibility", "visible");
      ognodes.each(function(i, el){
        var edges = el.connectedEdges();
        var vis = _.find(edges, function(e){ return e.style("visibility") === "visible"; });
        vis ? el.style("visibility", "visible") : el.style("visibility", "hidden");
      });
    });
    //hide and display info on genes on gene node click
    cy.on("tap", ".gene", function(evt){
      if(self.info.infoEl.style.display === "block" || !this.data().id){
        //if already visible, hide (repeated click)
        self.info.infoEl.style.display = "none"
      } else {
        //if hidden, set data and show
        var left, top;
        var f = self.info.fields;
        f.set("entrezId", this.data().id);
        f.set("geneId", this.data().name);
        f.set("symbols", this.data().symbols);
        f.set("reagentId", this.data().reagents);
        f.set("scoreType", this.data().scoreType);
        f.set("cutoff", this.data().cutoff);
        left  = this.renderedPosition().x + 20 + "px";
        top  = this.renderedPosition().y - 20 + "px";
        self.info.render(left, top);
      }
    });
  }
});
