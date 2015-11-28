var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
    initialize: function(eles){
        this.set("phenoId", eles.id.toString());
        this.set("name", eles.name);
    }
})
