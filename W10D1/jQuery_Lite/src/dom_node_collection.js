class DOMNodeCollection{
  constructor(HTMLElements){
    this.HTMLElements = HTMLElements;
  }

  html(arg){
    if(arg === undefined){
      return this.HTMLElements[0].innerHTML
    }else{
      this.HTMLElements.forEach((HTMLele) => {
        HTMLele.innerHTML = arg;
      })
    }
  }

  empty(){
    this.HTMLElements.forEach((HTMLele) => {
      HTMLele.innerHTML = "";
    })
  }

  append(appendee){
    let appendElements;

    if (appendee instanceof DOMNodeCollection){
      appendElements = [];
      appendee.HTMLElements.forEach((ele) => {
        appendElements.push(ele.outerHTML);
      })
      appendElements.join("");
    }else if (appendee instanceof HTMLElement){
      appendElements = appendee.outerHTML;
    }else if (typeof appendee === "string"){
      appendElements = appendee;
    }

    this.HTMLElements.forEach((ele) => {
      ele.innerHTML = ele.innerHTML.concat(appendElements)
    })
  }

  attr(key, val){
    this.HTMLElements.forEach((ele) => {
      ele.setAttribute(key, val);
    })
  }

  addClass(newClass){
    this.HTMLElements.forEach((ele) => {
      let existingClasses = ele.getAttribute("class");
      if(existingClasses === null){
        ele.setAttribute("class", newClass)
      }else{
        let appendedClasses = existingClasses.concat(` ${newClass}`);
        ele.setAttribute("class", appendedClasses);
      }
    })
  }

  removeClass(classToRemove){
    this.HTMLElements.forEach((ele) => {
      let classes = ele.getAttribute("class");
      console.log(classes);
      if(classes.includes(classToRemove)){
        classes = classes.replace(classToRemove, "");
        ele.setAttribute("class", classes);
      }
    })
  }
}

module.exports = DOMNodeCollection;