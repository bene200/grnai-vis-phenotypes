var Backbone = require("backbone");

var EasyTip = require("./easytip");

module.exports = Backbone.View.extend({
  initialize: function(opts){
    this.el = opts.el;
    this.fields = opts.fields;
    this.et = new EasyTip(this.el);
  },
  render: function(evt){
    const f = this.fields;
    let rids = [],
        r = null,
        sym;


    //build html string. Quite ugly ..
    let html = "<table class='table table-striped' style='width:100%'>";
    //mapped id
    html += "<tr><td>Entrez Id</td><td>" + "<a href='genedetails/"
        + f.get("entrezId") + "'>" + f.get("entrezId") + "</a>"
        + "</td></tr>";
    //gene id
    html += "<tr><td>Gene Id</td><td>" + f.get("geneId") + "</td></tr>";
    //gene symbols
    html += "<tr><td>Gene symbol</td><td>"
    sym = f.get("symbols")
    html += sym;
    html += "</td></tr>";
    //reagend ids
    html += "<tr><td>Reagent Ids</td><td>"
    rids = f.get("reagentId")
    for(let i=0; i<rids.length; i++){
      r = rids[i];
      if(i === rids.length-1){
        r.isLinked ? html += "<a href='reagentdetails/" + r.reagentName + "'>" + r.reagentName + "</a>"
                  : html += r.reagentName;
      } else {
        r.isLinked ? html += "<a href='reagentdetails/" + r.reagentName + "'>" + r.reagentName + "</a>, "
                  : html += r.reagentName + ", ";
      }
    }
    html += "</td></tr>";
    //score
    html += "<tr><td>Score</td><td>" + f.get("score") + "</td><tr>";
    //score type
    html += "<tr><td>Score Type</td><td>" + f.get("scoreType") + "</td><tr>";
    //cut off
    html += "<tr><td>Cutoff</td><td>" + f.get("cutoff") + "</td><tr>";
    //comment
    html += "<tr><td>Comment</td><td>" + f.get("comment") + "</td><tr>";
    html += "</table>";

    //set content, position and and set visible
    this.et.content(html);
    this.et.show(evt);
  }
});
