var Backbone = require("backbone");
var _ = require("underscore");

var PhenoNode = require("./phenotype");
var GeneNode = require("./gene");
var Edge = require("./edge");

module.exports = Backbone.Model.extend({
    initialize: function(data){
        //phenotype nodes
        var nodes = _.filter(data, function(x){ return x.node; });
        var phenoNodes = _.chain(nodes)
            .filter(function(el){
                return el.node.type !== undefined;
            })
            .map(function(el){
                return new PhenoNode(el.node);
            })
            .value();
        this.set("phenoNodes", new Backbone.Collection(phenoNodes));
        //gene nodes
        var geneNodes = _.chain(nodes)
            .filter(function(el){
                return el.node.symbols;
            })
            .map(function(el){
                return new GeneNode(el.node);
            })
            .value();
        this.set("geneNodes", new Backbone.Collection(geneNodes));
        //edges
        var edges = _.chain(_.filter(data, function(x){ return x.edge; }))
            .filter(function(el){
                return el.edge;
            })
            .map(function(el){
                return new Edge(el.edge);
            })
            .value();
        this.set("edges", new Backbone.Collection(edges));
    },
    toCytoscape: function(){
        var cyNodes = [];
        this.get("geneNodes").each(function(e){
            cyNodes.push({
                data: {
                    id: e.get("geneId"),
                    name: e.get("name"),
                    symbols: e.get("symbols"),
                    reagents: e.get("reagents"),
                    scoreType: e.get("scoreType"),
                    cutoff: e.get("cutoff"),
                    score: e.get("score")
                },
                classes: "gene"
            });
        });
        this.get("phenoNodes").each(function(e){
            cyNodes.push({
                data: {
                    id: e.get("phenoId"),
                    name: e.get("name")
                },
                classes: "phenotype"
            });
        });
        var cyEdges = [];
        this.get("edges").each(function(e){
            cyEdges.push({
                data: {
                    source: e.get("source"),
                    target: e.get("target")
                }
            });
        });
        return({
            nodes: cyNodes,
            edges: cyEdges
        });
    }
});
