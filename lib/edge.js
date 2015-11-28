var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
    initialize: function(eles){
        this.set("source", eles.source.toString());
        this.set("target", eles.target.toString());
    }
})
