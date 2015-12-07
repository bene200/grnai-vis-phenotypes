var EasyTip = module.exports = function(div){
  var el = document.createElement("div");

  //add to body
  this.el = el;
  div.appendChild(this.el);

  //set styles
  this.resetStyles();

  //suppress event undefined runtime errors
  window.onerror = function(message){
    if(message === "Uncaught TypeError: Cannot read property 'clientX' of undefined"){
      return true;
    }
  };
}

EasyTip.prototype.show = function(evt){
  //move div to mouse position and display
  var left, top;
  left  = event.clientX + 20 + "px";
  top  = event.clientY - 20 + "px";
  this.el.style.left = left;
  this.el.style.top = top;
  this.el.style.display = "block";
}

EasyTip.prototype.hide = function(){
  //simply hide div
  this.el.style.display = "none";
}

EasyTip.prototype.content = function(cont){
  //cont can be html string for advanced tooltips
  this.el.innerHTML = cont;
}

EasyTip.prototype.setStyle = function(attr, val){
  this.el.style[attr] = val;
}

EasyTip.prototype.resetStyles = function(){
  var el = this.el;

  el.style.position = "fixed";
  el.style.backgroundColor = "#e5e5e5";
  el.style.textAlign = "center";
  el.style.display = "none";
  el.style.border = "1px solid #444";
  el.style.color = "#444";
  el.style.overflow = "auto";
  el.style.zIndex = 1002;
  el.style.padding = "10px";
  el.style.borderRadius = "5px";
}
