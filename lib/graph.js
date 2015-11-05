var Backbone = require("backbone");
var cytoscape = require("cytoscape");
var _ = require("underscore");

module.exports = Backbone.View.extend({
  initialize: function(opts){
    this.el = opts.el;
    this.info = opts.info;
    this.data = opts.data;
    this.initCyElement();
    this.render();
  },
  initCyElement: function(){
    var cyEl = document.createElement("div");
    //set styles
    cyEl.style.position = "absolute";
    cyEl.style.width = "100%";
    cyEl.style.height = "100%";
    //append to main div
    this.el.appendChild(cyEl);
    this.cyEl = cyEl;
  },
  render: function(){
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
      elements: this.data,
      ready: function(){
        //set node sizes
        cy.$(".gene").each(function(i, el){
          el.style("width", el.degree()*25);
          el.style("height", el.degree()*25)
        })
        cy.$(".phenotype").each(function(i, el){
          el.style("width", el.degree()*4);
          el.style("height", el.degree()*4)
        })
        //define layout
        this.layout({
          name: "cose",
          nodeOverlap: 50,
          idealEdgeLength: 10
        });
      }
    });
    //set cy element as instance variable for this view
    this.cy = cy;
    this.defineCytoscapeEvents();
  },
  defineCytoscapeEvents: function(){
    var cy = this.cy;
    var self = this;
    //highlight connected edges and nodes on mouseover
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
    //hide and display information on phenotype node click
    cy.on('tap', '.phenotype', function(){
      var outgoers = this.outgoers();
      var ognodes = outgoers.nodes();
      var ogedges = outgoers.edges();
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
      if(self.info.infoEl.style.display === "block" || !this.data().mappedId){
        //if already visible, hide (repeated click)
        self.info.infoEl.style.display = "none"
      } else {
        //if hidden, set data and show
        var left, top;
        var f = self.info.fields;
        f.set("mappedId", this.data().mappedId);
        f.set("geneId", this.data().geneId);
        f.set("reagentId", this.data().reagentId);
        f.set("scoreType", this.data().scoreType);
        f.set("cutoff", this.data().cutoff);
        left  = this.renderedPosition().x + 20 + "px";
        top  = this.renderedPosition().y - 20 + "px";
        self.info.render(left, top);
      }
    });
  }
});
