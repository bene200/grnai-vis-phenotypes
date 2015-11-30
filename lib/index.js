/*
 * grnai-vis-phenotypes
 * https://github.com/bene200/grnai-vis-phenotypes
 *
 * Copyright (c) 2015 Benedikt Rauscher
 * Licensed under the MIT license.
 */

//npm dependencies
var Backbone = require("backbone");
var cytoscape = require("cytoscape");
var _ = require("underscore");

//inner dependencies
var GeneInfo = require("./info");
var GraphView = require("./graph");
var FieldsModel = require("./fields");
var FilterView = require("./filter");
var GraphModel = require("./graphmodel");

module.exports = grnaivisphenotypes = Backbone.View.extend({
  initialize: function(opts){
    //set fixed height for div
    console.log("Initializing....");
    opts.el.style.height = "800px";
    //init gene info view
    var model = new GraphModel(opts.graph);
    this.iv = new GeneInfo({
      el: opts.el,
      fields: model
    });
    //init graph view
    this.gv = new GraphView({
      el: opts.el,
      model: model,
      info: this.iv
    });
    //init filterin view
    this.fv = new FilterView({
      el: opts.el,
      cy: this.gv.cy
    })
  }
});
