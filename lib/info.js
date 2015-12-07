var Backbone = require("backbone");

module.exports = Backbone.View.extend({
  initialize: function(opts){
    this.el = opts.el;
    this.fields = opts.fields;
    this.initInfoElement();
  },
  initInfoElement: function(){
    var info = document.createElement("div");
    //set styles
    info.style.position = "fixed";
    info.style.backgroundColor = "#fff";
    info.style.textAlign = "center";
    info.style.display = "none";
    info.style.border = "1px solid #444";
    info.style.color = "#444";
    info.style.overflow = "auto";
    info.style.zIndex = 1002;
    info.style.padding = "10px";
    info.style.borderRadius = "5px";
    info.id = "info";
    //set as instance var
    this.el.appendChild(info);
    this.infoEl = info;
  },
  render: function(left, top){
    var f = this.fields;
    var rids = [],
        r = null;
    var html = "<table class='table table-striped' style='width:100%'>";
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
    for(var i=0; i<rids.length; i++){
      r = rids[i];
      if(i === rids.length-1){
        // debugger;
        r.isLinked ? html += "<a href='reagentdetails/" + r.reagentName + "'>" + r.reagentName + "</a>"
                  : html += r.reagentName;
      } else {
        r.isLinked ? html += "<a href='reagentdetails/" + r.reagentName + "'>" + r.reagentName + "</a>, "
                  : html += r.reagentName + ", ";
      }
    }
    html += "</td></tr>";
    //score type
    html += "<tr><td>Score Type</td><td>" + f.get("scoreType") + "</td><tr>";
    //cut off
    html += "<tr><td>Cutoff</td><td>" + f.get("cutoff") + "</td><tr>";
    html += "</table>";

    //set content, position and and set visible
    this.infoEl.innerHTML = html;
    this.infoEl.style.left = left;
    this.infoEl.style.top = top;
    this.infoEl.style.display = "block";
  }
});
