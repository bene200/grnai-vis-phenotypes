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
      this.set("mappedId", data.mappedId);
      this.set("geneId", data.geneId);
      this.set("reagentId", data.reagentId);
      this.set("scoreType", data.scoreType);
      this.set("cutoff", data.cutoff);
    }
  }
})
