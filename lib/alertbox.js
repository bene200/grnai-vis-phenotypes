var Backbone = require("backbone");
var _ = require("underscore");

var icons = require("./icons");

module.exports = Backbone.View.extend({
  initialize: function(obj){
    this.el = obj.el;

    this.initBox();
  },
  initBox: function(){
    //some general styles
    this.el.style.color = "#555";
    this.el.style.borderRadius = "1px";
    this.el.style.padding = "10px 36px";
    this.el.style.margin = "10px";

    //initialise as notice
    this.setBox("notice", "You have not selected anything.");
  },
  setBox(type, message){
    //check sanity
    var validTypes = [
      "warning",
      "error",
      "notice",
      "success"
    ];

    if(_.indexOf(validTypes, type) === -1){
      throw new Error("Invalid alert box type");
    }

    switch(type){
      case "warning":
        this.el.style.background = "#fff8c4 " + icons.warning + " no-repeat 10px 50%";
        this.el.style.border = "1px solid #f2c779";
        break;
      case "error":
        this.el.style.background = "#ffecec " + icons.error + " no-repeat 10px 50%";
        this.el.style.border = "1px solid #f5aca6";
        break;
      case "success":
        this.el.style.background = "#e9ffd9 " + icons.success + " no-repeat 10px 50%";
        this.el.style.border = "1px solid #a6ca8a";
        break;
      case "notice":
        this.el.style.background = "#e3f7fc " + icons.notice + " no-repeat 10px 50%";
        this.el.style.border = "1px solid #8ed9f6";
        break;
    }

    this.el.innerHTML = [
      "<span style='font-weight: bold; text-transform: uppercase;'>",
      "  " + type,
      "</span>",
      message
    ].join("\n");
  }
})
