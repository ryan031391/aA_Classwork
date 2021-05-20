/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection{\n  constructor(HTMLElements){\n    this.HTMLElements = HTMLElements;\n  }\n\n  html(arg){\n    if(arg === undefined){\n      return this.HTMLElements[0].innerHTML\n    }else{\n      this.HTMLElements.forEach((HTMLele) => {\n        HTMLele.innerHTML = arg;\n      })\n    }\n  }\n\n  empty(){\n    this.HTMLElements.forEach((HTMLele) => {\n      HTMLele.innerHTML = \"\";\n    })\n  }\n\n  append(appendee){\n    let appendElements;\n\n    if (appendee instanceof DOMNodeCollection){\n      appendElements = [];\n      appendee.HTMLElements.forEach((ele) => {\n        appendElements.push(ele.outerHTML);\n      })\n      appendElements.join(\"\");\n    }else if (appendee instanceof HTMLElement){\n      appendElements = appendee.outerHTML;\n    }else if (typeof appendee === \"string\"){\n      appendElements = appendee;\n    }\n\n    this.HTMLElements.forEach((ele) => {\n      ele.innerHTML = ele.innerHTML.concat(appendElements)\n    })\n  }\n\n  attr(key, val){\n    this.HTMLElements.forEach((ele) => {\n      ele.setAttribute(key, val);\n    })\n  }\n\n  addClass(newClass){\n    this.HTMLElements.forEach((ele) => {\n      let existingClasses = ele.getAttribute(\"class\");\n      if(existingClasses === null){\n        ele.setAttribute(\"class\", newClass)\n      }else{\n        let appendedClasses = existingClasses.concat(` ${newClass}`);\n        ele.setAttribute(\"class\", appendedClasses);\n      }\n    })\n  }\n\n  removeClass(classToRemove){\n    this.HTMLElements.forEach((ele) => {\n      let classes = ele.getAttribute(\"class\");\n      console.log(classes);\n      if(classes.includes(classToRemove)){\n        classes = classes.replace(classToRemove, \"\");\n        ele.setAttribute(\"class\", classes);\n      }\n    })\n  }\n}\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nfunction $(arg){\n  if(typeof arg === \"string\"){\n    // assumes that the passed in argument is a CSS selector\n    const nodes = document.querySelectorAll(arg)\n    const array = [];\n    for(let node of nodes.values()){\n      array.push(node);\n    }\n    return new DOMNodeCollection(array);\n  }else if (typeof arg === \"HTMLElement\"){\n    // assumes that the passed in argument is already an HTMLElement\n    return new DOMNodeCollection(arg)\n  }\n}\n\nwindow.$1 = $;\nwindow.DOMNodeCollection = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;