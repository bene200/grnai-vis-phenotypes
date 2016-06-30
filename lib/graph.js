var Backbone = require("backbone");
var cytoscape = require("cytoscape");
var $ = require("jquery");
var _ = require("underscore");
var EasyTip = require("./easytip");

var GraphModel = require("./graphmodel");

module.exports = Backbone.View.extend({
  initialize: function(opts){
    this.el = opts.el;
    this.info = opts.info;
    this.model = opts.model;
    this.et = new EasyTip(this.el);
    this.initCyElement();
    this.render();
  },
  initCyElement: function(){
    var cyEl = document.createElement("div");

    //set styles
    $(cyEl).attr('class', 'col-md-9');
    cyEl.style.height = "800px";
    cyEl.style.padding = "0px";

    //append to main div
    this.el.appendChild(cyEl);
    this.cyEl = cyEl;
  },
  render: function(){
    var self = this;
    var cy = cytoscape({
      container: self.cyEl,
      pixelRatio: 1,
      motionBlur: true,
      style: cytoscape.stylesheet()
        .selector("node")
          .css({
            "color": "#444",
            "font-weight": "bold",
            'text-valign': 'top',
            'text-halign': 'center',
            'min-zoomed-font-size': 8
          })
        .selector(".phenotype")
          .css({
            "content": "data(name)",
  					"font-size": 5,
  					"background-color": "#5cb534",
            "opacity": 0.95,
            "width": 30,
            "height": 30,
            "shape": "star"
          })
        .selector(".gene")
          .css({
            "content": "data(symbols)",
  					"font-size": 4,
            "background-color": "#444",
            width: 10,
            height: 10
          })
        .selector("edge")
          .css({
			      "line-color": "#D0D0D0",
            "width": 1
          })
        .selector(".highlight")
          .css({
            "background-color": "steelblue",
            "line-color": "steelblue",
            "opacity": 1
          })
        .selector(".phenoclicked")
          .css({
            "background-color": "#2A5518",
            "line-color": "#2A5518",
            "opacity": 1
          }),
      elements: self.model.toCytoscape(),
      ready: function(){
        //if many nodes, use various performance enhancing opts
        if(this.edges().length > 1000) {
          this.edges().style("curve-style", "haystack");
          this.edges().style("width", 0.1);
          this.layout({
            name: "concentric"
          });
        } else {
          //define layout
          this.layout({
            name: "cose"
          });
          this.fit();
        }
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
    var hadClass = false; //this is ugly
    cy.on("tapdragover", ".gene", function(evt){
      //remove old class first
      if(this.hasClass("phenoclicked")){
        this.removeClass("phenoclicked");
        hadClass = true;
      }
      //highlight moused over
      this.addClass("highlight");
      this.outgoers().each(function(i, el){
        el.addClass("highlight");
      });
      //show tooltip with gene symbol
      self.et.content(this.data().symbols);
      self.et.show(evt.originalEvent);
    });

    cy.on("tapdragout", ".gene", function(){
      this.removeClass("highlight");
      if(hadClass){
        this.addClass("phenoclicked");
        hadClass = false;
      }
      this.outgoers().each(function(i, el){
        el.removeClass("highlight");
      });
      self.et.hide();
    });

    cy.on("tapdragover", ".phenotype", function(evt){
      self.et.content(this.data().name);
      self.et.setStyle("backgroundColor", "#5cb534");
      self.et.setStyle("color", "#fff");
      self.et.show(evt.originalEvent);
    });

    cy.on("tapdragout", ".phenotype", function(){
      self.et.hide();
      self.et.resetStyles();
    });

    cy.on('tap', '.phenotype', function(){
      //hide and display information on phenotype node click
      var incomers = this.incomers(),
          ognodes = incomers.nodes(),
          ogedges = incomers.edges();

      ogedges[0].visible() ? ogedges.style("visibility", "hidden")
                          : ogedges.style("visibility", "visible");
      ognodes.each(function(i, el){
        var edges, vis;

        edges = el.connectedEdges();
        vis = _.find(edges, function(e){
          return e.style("visibility") === "visible";
        });
        vis ? el.style("visibility", "visible") : el.style("visibility", "hidden");
      });
    });

    cy.on("tap", ".gene", function(evt){
      //set data and show
      var f = self.info.fields;

      f.set("entrezId", this.data().entrezId);
      f.set("geneId", this.data().name);
      f.set("symbols", this.data().symbols);
      f.set("reagentId", this.data().reagents);
      f.set("score", this.data().score);
      f.set("scoreType", this.data().scoreType);
      f.set("cutoff", this.data().cutoff);
      f.set("comment", this.data().comment);

      self.info.render(evt.originalEvent);
    });

    cy.on("tap", function(evt){
      var evtTarget = evt.cyTarget;
      if( evtTarget === cy ){
        //tap on background
        self.info.et.hide();
      }
    });
  },
  resetHighlighted: function(){
    ////////////////////////////////
    // currently not used anymore //
    ////////////////////////////////
    var cy = this.cy,
        bt = null;
    //remove highlights from elements
    cy.elements().removeClass("highlight");
    //remove green colours from pheno buttons
    bt = document.getElementsByClassName("phenobtn");
    _.each(bt, function(b){
      b.style.backgroundColor = "";
      b.style.color = "#444";
    });
  }
});
