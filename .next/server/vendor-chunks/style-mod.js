"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/style-mod";
exports.ids = ["vendor-chunks/style-mod"];
exports.modules = {

/***/ "(ssr)/./node_modules/style-mod/src/style-mod.js":
/*!*************************************************!*\
  !*** ./node_modules/style-mod/src/style-mod.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StyleModule: () => (/* binding */ StyleModule)\n/* harmony export */ });\nconst C = \"\\u037c\"\nconst COUNT = typeof Symbol == \"undefined\" ? \"__\" + C : Symbol.for(C)\nconst SET = typeof Symbol == \"undefined\" ? \"__styleSet\" + Math.floor(Math.random() * 1e8) : Symbol(\"styleSet\")\nconst top = typeof globalThis != \"undefined\" ? globalThis : typeof window != \"undefined\" ? window : {}\n\n// :: - Style modules encapsulate a set of CSS rules defined from\n// JavaScript. Their definitions are only available in a given DOM\n// root after it has been _mounted_ there with `StyleModule.mount`.\n//\n// Style modules should be created once and stored somewhere, as\n// opposed to re-creating them every time you need them. The amount of\n// CSS rules generated for a given DOM root is bounded by the amount\n// of style modules that were used. So to avoid leaking rules, don't\n// create these dynamically, but treat them as one-time allocations.\nclass StyleModule {\n  // :: (Object<Style>, ?{finish: ?(string) → string})\n  // Create a style module from the given spec.\n  //\n  // When `finish` is given, it is called on regular (non-`@`)\n  // selectors (after `&` expansion) to compute the final selector.\n  constructor(spec, options) {\n    this.rules = []\n    let {finish} = options || {}\n\n    function splitSelector(selector) {\n      return /^@/.test(selector) ? [selector] : selector.split(/,\\s*/)\n    }\n\n    function render(selectors, spec, target, isKeyframes) {\n      let local = [], isAt = /^@(\\w+)\\b/.exec(selectors[0]), keyframes = isAt && isAt[1] == \"keyframes\"\n      if (isAt && spec == null) return target.push(selectors[0] + \";\")\n      for (let prop in spec) {\n        let value = spec[prop]\n        if (/&/.test(prop)) {\n          render(prop.split(/,\\s*/).map(part => selectors.map(sel => part.replace(/&/, sel))).reduce((a, b) => a.concat(b)),\n                 value, target)\n        } else if (value && typeof value == \"object\") {\n          if (!isAt) throw new RangeError(\"The value of a property (\" + prop + \") should be a primitive value.\")\n          render(splitSelector(prop), value, local, keyframes)\n        } else if (value != null) {\n          local.push(prop.replace(/_.*/, \"\").replace(/[A-Z]/g, l => \"-\" + l.toLowerCase()) + \": \" + value + \";\")\n        }\n      }\n      if (local.length || keyframes) {\n        target.push((finish && !isAt && !isKeyframes ? selectors.map(finish) : selectors).join(\", \") +\n                    \" {\" + local.join(\" \") + \"}\")\n      }\n    }\n\n    for (let prop in spec) render(splitSelector(prop), spec[prop], this.rules)\n  }\n\n  // :: () → string\n  // Returns a string containing the module's CSS rules.\n  getRules() { return this.rules.join(\"\\n\") }\n\n  // :: () → string\n  // Generate a new unique CSS class name.\n  static newName() {\n    let id = top[COUNT] || 1\n    top[COUNT] = id + 1\n    return C + id.toString(36)\n  }\n\n  // :: (union<Document, ShadowRoot>, union<[StyleModule], StyleModule>, ?{nonce: ?string})\n  //\n  // Mount the given set of modules in the given DOM root, which ensures\n  // that the CSS rules defined by the module are available in that\n  // context.\n  //\n  // Rules are only added to the document once per root.\n  //\n  // Rule order will follow the order of the modules, so that rules from\n  // modules later in the array take precedence of those from earlier\n  // modules. If you call this function multiple times for the same root\n  // in a way that changes the order of already mounted modules, the old\n  // order will be changed.\n  //\n  // If a Content Security Policy nonce is provided, it is added to\n  // the `<style>` tag generated by the library.\n  static mount(root, modules, options) {\n    let set = root[SET], nonce = options && options.nonce\n    if (!set) set = new StyleSet(root, nonce)\n    else if (nonce) set.setNonce(nonce)\n    set.mount(Array.isArray(modules) ? modules : [modules], root)\n  }\n}\n\nlet adoptedSet = new Map //<Document, StyleSet>\n\nclass StyleSet {\n  constructor(root, nonce) {\n    let doc = root.ownerDocument || root, win = doc.defaultView\n    if (!root.head && root.adoptedStyleSheets && win.CSSStyleSheet) {\n      let adopted = adoptedSet.get(doc)\n      if (adopted) return root[SET] = adopted\n      this.sheet = new win.CSSStyleSheet\n      adoptedSet.set(doc, this)\n    } else {\n      this.styleTag = doc.createElement(\"style\")\n      if (nonce) this.styleTag.setAttribute(\"nonce\", nonce)\n    }\n    this.modules = []\n    root[SET] = this\n  }\n\n  mount(modules, root) {\n    let sheet = this.sheet\n    let pos = 0 /* Current rule offset */, j = 0 /* Index into this.modules */\n    for (let i = 0; i < modules.length; i++) {\n      let mod = modules[i], index = this.modules.indexOf(mod)\n      if (index < j && index > -1) { // Ordering conflict\n        this.modules.splice(index, 1)\n        j--\n        index = -1\n      }\n      if (index == -1) {\n        this.modules.splice(j++, 0, mod)\n        if (sheet) for (let k = 0; k < mod.rules.length; k++)\n          sheet.insertRule(mod.rules[k], pos++)\n      } else {\n        while (j < index) pos += this.modules[j++].rules.length\n        pos += mod.rules.length\n        j++\n      }\n    }\n\n    if (sheet) {\n      if (root.adoptedStyleSheets.indexOf(this.sheet) < 0)\n        root.adoptedStyleSheets = [this.sheet, ...root.adoptedStyleSheets]\n    } else {\n      let text = \"\"\n      for (let i = 0; i < this.modules.length; i++)\n        text += this.modules[i].getRules() + \"\\n\"\n      this.styleTag.textContent = text\n      let target = root.head || root\n      if (this.styleTag.parentNode != target)\n        target.insertBefore(this.styleTag, target.firstChild)\n    }\n  }\n\n  setNonce(nonce) {\n    if (this.styleTag && this.styleTag.getAttribute(\"nonce\") != nonce)\n      this.styleTag.setAttribute(\"nonce\", nonce)\n  }\n}\n\n// Style::Object<union<Style,string>>\n//\n// A style is an object that, in the simple case, maps CSS property\n// names to strings holding their values, as in `{color: \"red\",\n// fontWeight: \"bold\"}`. The property names can be given in\n// camel-case—the library will insert a dash before capital letters\n// when converting them to CSS.\n//\n// If you include an underscore in a property name, it and everything\n// after it will be removed from the output, which can be useful when\n// providing a property multiple times, for browser compatibility\n// reasons.\n//\n// A property in a style object can also be a sub-selector, which\n// extends the current context to add a pseudo-selector or a child\n// selector. Such a property should contain a `&` character, which\n// will be replaced by the current selector. For example `{\"&:before\":\n// {content: '\"hi\"'}}`. Sub-selectors and regular properties can\n// freely be mixed in a given object. Any property containing a `&` is\n// assumed to be a sub-selector.\n//\n// Finally, a property can specify an @-block to be wrapped around the\n// styles defined inside the object that's the property's value. For\n// example to create a media query you can do `{\"@media screen and\n// (min-width: 400px)\": {...}}`.\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtbW9kL3NyYy9zdHlsZS1tb2QuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsMEJBQTBCLDJCQUEyQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVE7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDViw4R0FBOEc7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRUFBMkUsZUFBZTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzQkFBc0I7QUFDekQ7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELElBQUksaUJBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQseUJBQXlCLEtBQUsiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL0NyYWNrZWQvRnJvbnQtZW5kL3N0YXJ0dXAvbm9kZV9tb2R1bGVzL3N0eWxlLW1vZC9zcmMvc3R5bGUtbW9kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEMgPSBcIlxcdTAzN2NcIlxuY29uc3QgQ09VTlQgPSB0eXBlb2YgU3ltYm9sID09IFwidW5kZWZpbmVkXCIgPyBcIl9fXCIgKyBDIDogU3ltYm9sLmZvcihDKVxuY29uc3QgU0VUID0gdHlwZW9mIFN5bWJvbCA9PSBcInVuZGVmaW5lZFwiID8gXCJfX3N0eWxlU2V0XCIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTgpIDogU3ltYm9sKFwic3R5bGVTZXRcIilcbmNvbnN0IHRvcCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge31cblxuLy8gOjogLSBTdHlsZSBtb2R1bGVzIGVuY2Fwc3VsYXRlIGEgc2V0IG9mIENTUyBydWxlcyBkZWZpbmVkIGZyb21cbi8vIEphdmFTY3JpcHQuIFRoZWlyIGRlZmluaXRpb25zIGFyZSBvbmx5IGF2YWlsYWJsZSBpbiBhIGdpdmVuIERPTVxuLy8gcm9vdCBhZnRlciBpdCBoYXMgYmVlbiBfbW91bnRlZF8gdGhlcmUgd2l0aCBgU3R5bGVNb2R1bGUubW91bnRgLlxuLy9cbi8vIFN0eWxlIG1vZHVsZXMgc2hvdWxkIGJlIGNyZWF0ZWQgb25jZSBhbmQgc3RvcmVkIHNvbWV3aGVyZSwgYXNcbi8vIG9wcG9zZWQgdG8gcmUtY3JlYXRpbmcgdGhlbSBldmVyeSB0aW1lIHlvdSBuZWVkIHRoZW0uIFRoZSBhbW91bnQgb2Zcbi8vIENTUyBydWxlcyBnZW5lcmF0ZWQgZm9yIGEgZ2l2ZW4gRE9NIHJvb3QgaXMgYm91bmRlZCBieSB0aGUgYW1vdW50XG4vLyBvZiBzdHlsZSBtb2R1bGVzIHRoYXQgd2VyZSB1c2VkLiBTbyB0byBhdm9pZCBsZWFraW5nIHJ1bGVzLCBkb24ndFxuLy8gY3JlYXRlIHRoZXNlIGR5bmFtaWNhbGx5LCBidXQgdHJlYXQgdGhlbSBhcyBvbmUtdGltZSBhbGxvY2F0aW9ucy5cbmV4cG9ydCBjbGFzcyBTdHlsZU1vZHVsZSB7XG4gIC8vIDo6IChPYmplY3Q8U3R5bGU+LCA/e2ZpbmlzaDogPyhzdHJpbmcpIOKGkiBzdHJpbmd9KVxuICAvLyBDcmVhdGUgYSBzdHlsZSBtb2R1bGUgZnJvbSB0aGUgZ2l2ZW4gc3BlYy5cbiAgLy9cbiAgLy8gV2hlbiBgZmluaXNoYCBpcyBnaXZlbiwgaXQgaXMgY2FsbGVkIG9uIHJlZ3VsYXIgKG5vbi1gQGApXG4gIC8vIHNlbGVjdG9ycyAoYWZ0ZXIgYCZgIGV4cGFuc2lvbikgdG8gY29tcHV0ZSB0aGUgZmluYWwgc2VsZWN0b3IuXG4gIGNvbnN0cnVjdG9yKHNwZWMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnJ1bGVzID0gW11cbiAgICBsZXQge2ZpbmlzaH0gPSBvcHRpb25zIHx8IHt9XG5cbiAgICBmdW5jdGlvbiBzcGxpdFNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gL15ALy50ZXN0KHNlbGVjdG9yKSA/IFtzZWxlY3Rvcl0gOiBzZWxlY3Rvci5zcGxpdCgvLFxccyovKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlcihzZWxlY3RvcnMsIHNwZWMsIHRhcmdldCwgaXNLZXlmcmFtZXMpIHtcbiAgICAgIGxldCBsb2NhbCA9IFtdLCBpc0F0ID0gL15AKFxcdyspXFxiLy5leGVjKHNlbGVjdG9yc1swXSksIGtleWZyYW1lcyA9IGlzQXQgJiYgaXNBdFsxXSA9PSBcImtleWZyYW1lc1wiXG4gICAgICBpZiAoaXNBdCAmJiBzcGVjID09IG51bGwpIHJldHVybiB0YXJnZXQucHVzaChzZWxlY3RvcnNbMF0gKyBcIjtcIilcbiAgICAgIGZvciAobGV0IHByb3AgaW4gc3BlYykge1xuICAgICAgICBsZXQgdmFsdWUgPSBzcGVjW3Byb3BdXG4gICAgICAgIGlmICgvJi8udGVzdChwcm9wKSkge1xuICAgICAgICAgIHJlbmRlcihwcm9wLnNwbGl0KC8sXFxzKi8pLm1hcChwYXJ0ID0+IHNlbGVjdG9ycy5tYXAoc2VsID0+IHBhcnQucmVwbGFjZSgvJi8sIHNlbCkpKS5yZWR1Y2UoKGEsIGIpID0+IGEuY29uY2F0KGIpKSxcbiAgICAgICAgICAgICAgICAgdmFsdWUsIHRhcmdldClcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgIGlmICghaXNBdCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgdmFsdWUgb2YgYSBwcm9wZXJ0eSAoXCIgKyBwcm9wICsgXCIpIHNob3VsZCBiZSBhIHByaW1pdGl2ZSB2YWx1ZS5cIilcbiAgICAgICAgICByZW5kZXIoc3BsaXRTZWxlY3Rvcihwcm9wKSwgdmFsdWUsIGxvY2FsLCBrZXlmcmFtZXMpXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIGxvY2FsLnB1c2gocHJvcC5yZXBsYWNlKC9fLiovLCBcIlwiKS5yZXBsYWNlKC9bQS1aXS9nLCBsID0+IFwiLVwiICsgbC50b0xvd2VyQ2FzZSgpKSArIFwiOiBcIiArIHZhbHVlICsgXCI7XCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChsb2NhbC5sZW5ndGggfHwga2V5ZnJhbWVzKSB7XG4gICAgICAgIHRhcmdldC5wdXNoKChmaW5pc2ggJiYgIWlzQXQgJiYgIWlzS2V5ZnJhbWVzID8gc2VsZWN0b3JzLm1hcChmaW5pc2gpIDogc2VsZWN0b3JzKS5qb2luKFwiLCBcIikgK1xuICAgICAgICAgICAgICAgICAgICBcIiB7XCIgKyBsb2NhbC5qb2luKFwiIFwiKSArIFwifVwiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IHByb3AgaW4gc3BlYykgcmVuZGVyKHNwbGl0U2VsZWN0b3IocHJvcCksIHNwZWNbcHJvcF0sIHRoaXMucnVsZXMpXG4gIH1cblxuICAvLyA6OiAoKSDihpIgc3RyaW5nXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgY29udGFpbmluZyB0aGUgbW9kdWxlJ3MgQ1NTIHJ1bGVzLlxuICBnZXRSdWxlcygpIHsgcmV0dXJuIHRoaXMucnVsZXMuam9pbihcIlxcblwiKSB9XG5cbiAgLy8gOjogKCkg4oaSIHN0cmluZ1xuICAvLyBHZW5lcmF0ZSBhIG5ldyB1bmlxdWUgQ1NTIGNsYXNzIG5hbWUuXG4gIHN0YXRpYyBuZXdOYW1lKCkge1xuICAgIGxldCBpZCA9IHRvcFtDT1VOVF0gfHwgMVxuICAgIHRvcFtDT1VOVF0gPSBpZCArIDFcbiAgICByZXR1cm4gQyArIGlkLnRvU3RyaW5nKDM2KVxuICB9XG5cbiAgLy8gOjogKHVuaW9uPERvY3VtZW50LCBTaGFkb3dSb290PiwgdW5pb248W1N0eWxlTW9kdWxlXSwgU3R5bGVNb2R1bGU+LCA/e25vbmNlOiA/c3RyaW5nfSlcbiAgLy9cbiAgLy8gTW91bnQgdGhlIGdpdmVuIHNldCBvZiBtb2R1bGVzIGluIHRoZSBnaXZlbiBET00gcm9vdCwgd2hpY2ggZW5zdXJlc1xuICAvLyB0aGF0IHRoZSBDU1MgcnVsZXMgZGVmaW5lZCBieSB0aGUgbW9kdWxlIGFyZSBhdmFpbGFibGUgaW4gdGhhdFxuICAvLyBjb250ZXh0LlxuICAvL1xuICAvLyBSdWxlcyBhcmUgb25seSBhZGRlZCB0byB0aGUgZG9jdW1lbnQgb25jZSBwZXIgcm9vdC5cbiAgLy9cbiAgLy8gUnVsZSBvcmRlciB3aWxsIGZvbGxvdyB0aGUgb3JkZXIgb2YgdGhlIG1vZHVsZXMsIHNvIHRoYXQgcnVsZXMgZnJvbVxuICAvLyBtb2R1bGVzIGxhdGVyIGluIHRoZSBhcnJheSB0YWtlIHByZWNlZGVuY2Ugb2YgdGhvc2UgZnJvbSBlYXJsaWVyXG4gIC8vIG1vZHVsZXMuIElmIHlvdSBjYWxsIHRoaXMgZnVuY3Rpb24gbXVsdGlwbGUgdGltZXMgZm9yIHRoZSBzYW1lIHJvb3RcbiAgLy8gaW4gYSB3YXkgdGhhdCBjaGFuZ2VzIHRoZSBvcmRlciBvZiBhbHJlYWR5IG1vdW50ZWQgbW9kdWxlcywgdGhlIG9sZFxuICAvLyBvcmRlciB3aWxsIGJlIGNoYW5nZWQuXG4gIC8vXG4gIC8vIElmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgbm9uY2UgaXMgcHJvdmlkZWQsIGl0IGlzIGFkZGVkIHRvXG4gIC8vIHRoZSBgPHN0eWxlPmAgdGFnIGdlbmVyYXRlZCBieSB0aGUgbGlicmFyeS5cbiAgc3RhdGljIG1vdW50KHJvb3QsIG1vZHVsZXMsIG9wdGlvbnMpIHtcbiAgICBsZXQgc2V0ID0gcm9vdFtTRVRdLCBub25jZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5ub25jZVxuICAgIGlmICghc2V0KSBzZXQgPSBuZXcgU3R5bGVTZXQocm9vdCwgbm9uY2UpXG4gICAgZWxzZSBpZiAobm9uY2UpIHNldC5zZXROb25jZShub25jZSlcbiAgICBzZXQubW91bnQoQXJyYXkuaXNBcnJheShtb2R1bGVzKSA/IG1vZHVsZXMgOiBbbW9kdWxlc10sIHJvb3QpXG4gIH1cbn1cblxubGV0IGFkb3B0ZWRTZXQgPSBuZXcgTWFwIC8vPERvY3VtZW50LCBTdHlsZVNldD5cblxuY2xhc3MgU3R5bGVTZXQge1xuICBjb25zdHJ1Y3Rvcihyb290LCBub25jZSkge1xuICAgIGxldCBkb2MgPSByb290Lm93bmVyRG9jdW1lbnQgfHwgcm9vdCwgd2luID0gZG9jLmRlZmF1bHRWaWV3XG4gICAgaWYgKCFyb290LmhlYWQgJiYgcm9vdC5hZG9wdGVkU3R5bGVTaGVldHMgJiYgd2luLkNTU1N0eWxlU2hlZXQpIHtcbiAgICAgIGxldCBhZG9wdGVkID0gYWRvcHRlZFNldC5nZXQoZG9jKVxuICAgICAgaWYgKGFkb3B0ZWQpIHJldHVybiByb290W1NFVF0gPSBhZG9wdGVkXG4gICAgICB0aGlzLnNoZWV0ID0gbmV3IHdpbi5DU1NTdHlsZVNoZWV0XG4gICAgICBhZG9wdGVkU2V0LnNldChkb2MsIHRoaXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGVUYWcgPSBkb2MuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpXG4gICAgICBpZiAobm9uY2UpIHRoaXMuc3R5bGVUYWcuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpXG4gICAgfVxuICAgIHRoaXMubW9kdWxlcyA9IFtdXG4gICAgcm9vdFtTRVRdID0gdGhpc1xuICB9XG5cbiAgbW91bnQobW9kdWxlcywgcm9vdCkge1xuICAgIGxldCBzaGVldCA9IHRoaXMuc2hlZXRcbiAgICBsZXQgcG9zID0gMCAvKiBDdXJyZW50IHJ1bGUgb2Zmc2V0ICovLCBqID0gMCAvKiBJbmRleCBpbnRvIHRoaXMubW9kdWxlcyAqL1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG1vZCA9IG1vZHVsZXNbaV0sIGluZGV4ID0gdGhpcy5tb2R1bGVzLmluZGV4T2YobW9kKVxuICAgICAgaWYgKGluZGV4IDwgaiAmJiBpbmRleCA+IC0xKSB7IC8vIE9yZGVyaW5nIGNvbmZsaWN0XG4gICAgICAgIHRoaXMubW9kdWxlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIGotLVxuICAgICAgICBpbmRleCA9IC0xXG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgdGhpcy5tb2R1bGVzLnNwbGljZShqKyssIDAsIG1vZClcbiAgICAgICAgaWYgKHNoZWV0KSBmb3IgKGxldCBrID0gMDsgayA8IG1vZC5ydWxlcy5sZW5ndGg7IGsrKylcbiAgICAgICAgICBzaGVldC5pbnNlcnRSdWxlKG1vZC5ydWxlc1trXSwgcG9zKyspXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAoaiA8IGluZGV4KSBwb3MgKz0gdGhpcy5tb2R1bGVzW2orK10ucnVsZXMubGVuZ3RoXG4gICAgICAgIHBvcyArPSBtb2QucnVsZXMubGVuZ3RoXG4gICAgICAgIGorK1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzaGVldCkge1xuICAgICAgaWYgKHJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzLmluZGV4T2YodGhpcy5zaGVldCkgPCAwKVxuICAgICAgICByb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IFt0aGlzLnNoZWV0LCAuLi5yb290LmFkb3B0ZWRTdHlsZVNoZWV0c11cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRleHQgPSBcIlwiXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kdWxlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgdGV4dCArPSB0aGlzLm1vZHVsZXNbaV0uZ2V0UnVsZXMoKSArIFwiXFxuXCJcbiAgICAgIHRoaXMuc3R5bGVUYWcudGV4dENvbnRlbnQgPSB0ZXh0XG4gICAgICBsZXQgdGFyZ2V0ID0gcm9vdC5oZWFkIHx8IHJvb3RcbiAgICAgIGlmICh0aGlzLnN0eWxlVGFnLnBhcmVudE5vZGUgIT0gdGFyZ2V0KVxuICAgICAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKHRoaXMuc3R5bGVUYWcsIHRhcmdldC5maXJzdENoaWxkKVxuICAgIH1cbiAgfVxuXG4gIHNldE5vbmNlKG5vbmNlKSB7XG4gICAgaWYgKHRoaXMuc3R5bGVUYWcgJiYgdGhpcy5zdHlsZVRhZy5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKSAhPSBub25jZSlcbiAgICAgIHRoaXMuc3R5bGVUYWcuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpXG4gIH1cbn1cblxuLy8gU3R5bGU6Ok9iamVjdDx1bmlvbjxTdHlsZSxzdHJpbmc+PlxuLy9cbi8vIEEgc3R5bGUgaXMgYW4gb2JqZWN0IHRoYXQsIGluIHRoZSBzaW1wbGUgY2FzZSwgbWFwcyBDU1MgcHJvcGVydHlcbi8vIG5hbWVzIHRvIHN0cmluZ3MgaG9sZGluZyB0aGVpciB2YWx1ZXMsIGFzIGluIGB7Y29sb3I6IFwicmVkXCIsXG4vLyBmb250V2VpZ2h0OiBcImJvbGRcIn1gLiBUaGUgcHJvcGVydHkgbmFtZXMgY2FuIGJlIGdpdmVuIGluXG4vLyBjYW1lbC1jYXNl4oCUdGhlIGxpYnJhcnkgd2lsbCBpbnNlcnQgYSBkYXNoIGJlZm9yZSBjYXBpdGFsIGxldHRlcnNcbi8vIHdoZW4gY29udmVydGluZyB0aGVtIHRvIENTUy5cbi8vXG4vLyBJZiB5b3UgaW5jbHVkZSBhbiB1bmRlcnNjb3JlIGluIGEgcHJvcGVydHkgbmFtZSwgaXQgYW5kIGV2ZXJ5dGhpbmdcbi8vIGFmdGVyIGl0IHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBvdXRwdXQsIHdoaWNoIGNhbiBiZSB1c2VmdWwgd2hlblxuLy8gcHJvdmlkaW5nIGEgcHJvcGVydHkgbXVsdGlwbGUgdGltZXMsIGZvciBicm93c2VyIGNvbXBhdGliaWxpdHlcbi8vIHJlYXNvbnMuXG4vL1xuLy8gQSBwcm9wZXJ0eSBpbiBhIHN0eWxlIG9iamVjdCBjYW4gYWxzbyBiZSBhIHN1Yi1zZWxlY3Rvciwgd2hpY2hcbi8vIGV4dGVuZHMgdGhlIGN1cnJlbnQgY29udGV4dCB0byBhZGQgYSBwc2V1ZG8tc2VsZWN0b3Igb3IgYSBjaGlsZFxuLy8gc2VsZWN0b3IuIFN1Y2ggYSBwcm9wZXJ0eSBzaG91bGQgY29udGFpbiBhIGAmYCBjaGFyYWN0ZXIsIHdoaWNoXG4vLyB3aWxsIGJlIHJlcGxhY2VkIGJ5IHRoZSBjdXJyZW50IHNlbGVjdG9yLiBGb3IgZXhhbXBsZSBge1wiJjpiZWZvcmVcIjpcbi8vIHtjb250ZW50OiAnXCJoaVwiJ319YC4gU3ViLXNlbGVjdG9ycyBhbmQgcmVndWxhciBwcm9wZXJ0aWVzIGNhblxuLy8gZnJlZWx5IGJlIG1peGVkIGluIGEgZ2l2ZW4gb2JqZWN0LiBBbnkgcHJvcGVydHkgY29udGFpbmluZyBhIGAmYCBpc1xuLy8gYXNzdW1lZCB0byBiZSBhIHN1Yi1zZWxlY3Rvci5cbi8vXG4vLyBGaW5hbGx5LCBhIHByb3BlcnR5IGNhbiBzcGVjaWZ5IGFuIEAtYmxvY2sgdG8gYmUgd3JhcHBlZCBhcm91bmQgdGhlXG4vLyBzdHlsZXMgZGVmaW5lZCBpbnNpZGUgdGhlIG9iamVjdCB0aGF0J3MgdGhlIHByb3BlcnR5J3MgdmFsdWUuIEZvclxuLy8gZXhhbXBsZSB0byBjcmVhdGUgYSBtZWRpYSBxdWVyeSB5b3UgY2FuIGRvIGB7XCJAbWVkaWEgc2NyZWVuIGFuZFxuLy8gKG1pbi13aWR0aDogNDAwcHgpXCI6IHsuLi59fWAuXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-mod/src/style-mod.js\n");

/***/ })

};
;