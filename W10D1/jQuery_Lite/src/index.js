const DOMNodeCollection = require("./dom_node_collection");

function $(arg){
  if(typeof arg === "string"){
    // assumes that the passed in argument is a CSS selector
    const nodes = document.querySelectorAll(arg)
    const array = [];
    for(let node of nodes.values()){
      array.push(node);
    }
    return new DOMNodeCollection(array);
  }else if (typeof arg === "HTMLElement"){
    // assumes that the passed in argument is already an HTMLElement
    return new DOMNodeCollection(arg)
  }
}

window.$1 = $;
window.DOMNodeCollection = DOMNodeCollection;
