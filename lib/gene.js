var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
    initialize: function(eles){
        this.set("geneId", (eles.id ? eles.id.toString() : ''));
        this.set("entrezId", eles.entrezId);
        this.set("name", eles.name);
        this.set("symbols", eles.symbols);
        this.set("reagents", eles.reagents);
        this.set("scoreType", eles.scoreType);
        this.set("cutoff", eles.cutoff);
        this.set("score", eles.score);
    }
});
