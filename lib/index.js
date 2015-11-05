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

module.exports = grnaivisphenotypes = Backbone.View.extend({
  initialize: function(opts){
    //init gene info view
    var model = new Backbone.Model({
      mappedId: "",
      geneId: "",
      reagentId: [],
      scoreType: "",
      cutoff: ""
    })
    this.iv = new GeneInfo({
      el: opts.el,
      fields: model
    });
    //init graph view
    this.gv = new GraphView({
      el: opts.el,
      data: opts.d,
      info: this.iv
    });
    //init filterin view
    this.fv = new FilterView({
      el: opts.el,
      cy: this.gv.cy
    })
  }
});
