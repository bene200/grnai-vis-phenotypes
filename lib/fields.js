var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
  defaults: {
    mappedId: "",
    geneId: "",
    reagentId: [],
    scoreType: "",
    cutoff: ""
  },
  initialize: function(data){
    if(data){
      this.set("entrezId", data.mappedId);
      this.set("geneId", data.geneId);
      this.set("geneSymbols", data.symbols);
      this.set("reagentId", data.reagentId);
      this.set("scoreType", data.scoreType);
      this.set("cutoff", data.cutoff);
    }
  }
})
