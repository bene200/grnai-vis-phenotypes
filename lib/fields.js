var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
  defaults: {
    mappedId: "",
    geneId: "",
    reagentId: [],
    score: "not provided",
    scoreType: "",
    cutoff: "",
    comment: ""
  },
  initialize: function(data){
    if(data){
      this.set("entrezId", data.mappedId);
      this.set("geneId", data.geneId);
      this.set("geneSymbols", data.symbols);
      this.set("reagentId", data.reagentId);
      this.set("score", data.score);
      this.set("scoreType", data.scoreType);
      this.set("cutoff", data.cutoff);
      this.set("comment", data.comment);
    }
  }
})
