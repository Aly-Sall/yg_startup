/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit-parents";
exports.ids = ["vendor-chunks/unist-util-visit-parents"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-visit-parents/color.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/color.js ***!
  \********************************************************/
/***/ ((module) => {

eval("module.exports = color\nfunction color(d) {\n  return '\\u001B[33m' + d + '\\u001B[39m'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2NvbG9yLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvbWFjL0RvY3VtZW50cy9DcmFja2VkL0Zyb250LWVuZC9zdGFydHVwL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvY29sb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBjb2xvclxuZnVuY3Rpb24gY29sb3IoZCkge1xuICByZXR1cm4gJ1xcdTAwMUJbMzNtJyArIGQgKyAnXFx1MDAxQlszOW0nXG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit-parents/color.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/unist-util-visit-parents/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = visitParents\n\nvar convert = __webpack_require__(/*! unist-util-is/convert */ \"(ssr)/./node_modules/unist-util-is/convert.js\")\nvar color = __webpack_require__(/*! ./color */ \"(ssr)/./node_modules/unist-util-visit-parents/color.js\")\n\nvar CONTINUE = true\nvar SKIP = 'skip'\nvar EXIT = false\n\nvisitParents.CONTINUE = CONTINUE\nvisitParents.SKIP = SKIP\nvisitParents.EXIT = EXIT\n\nfunction visitParents(tree, test, visitor, reverse) {\n  var step\n  var is\n\n  if (typeof test === 'function' && typeof visitor !== 'function') {\n    reverse = visitor\n    visitor = test\n    test = null\n  }\n\n  is = convert(test)\n  step = reverse ? -1 : 1\n\n  factory(tree, null, [])()\n\n  function factory(node, index, parents) {\n    var value = typeof node === 'object' && node !== null ? node : {}\n    var name\n\n    if (typeof value.type === 'string') {\n      name =\n        typeof value.tagName === 'string'\n          ? value.tagName\n          : typeof value.name === 'string'\n          ? value.name\n          : undefined\n\n      visit.displayName =\n        'node (' + color(value.type + (name ? '<' + name + '>' : '')) + ')'\n    }\n\n    return visit\n\n    function visit() {\n      var grandparents = parents.concat(node)\n      var result = []\n      var subresult\n      var offset\n\n      if (!test || is(node, index, parents[parents.length - 1] || null)) {\n        result = toResult(visitor(node, parents))\n\n        if (result[0] === EXIT) {\n          return result\n        }\n      }\n\n      if (node.children && result[0] !== SKIP) {\n        offset = (reverse ? node.children.length : -1) + step\n\n        while (offset > -1 && offset < node.children.length) {\n          subresult = factory(node.children[offset], offset, grandparents)()\n\n          if (subresult[0] === EXIT) {\n            return subresult\n          }\n\n          offset =\n            typeof subresult[1] === 'number' ? subresult[1] : offset + step\n        }\n      }\n\n      return result\n    }\n  }\n}\n\nfunction toResult(value) {\n  if (value !== null && typeof value === 'object' && 'length' in value) {\n    return value\n  }\n\n  if (typeof value === 'number') {\n    return [CONTINUE, value]\n  }\n\n  return [value]\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyw0RUFBdUI7QUFDN0MsWUFBWSxtQkFBTyxDQUFDLHVFQUFTOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL21hYy9Eb2N1bWVudHMvQ3JhY2tlZC9Gcm9udC1lbmQvc3RhcnR1cC9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2l0UGFyZW50c1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG52YXIgY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJylcblxudmFyIENPTlRJTlVFID0gdHJ1ZVxudmFyIFNLSVAgPSAnc2tpcCdcbnZhciBFWElUID0gZmFsc2VcblxudmlzaXRQYXJlbnRzLkNPTlRJTlVFID0gQ09OVElOVUVcbnZpc2l0UGFyZW50cy5TS0lQID0gU0tJUFxudmlzaXRQYXJlbnRzLkVYSVQgPSBFWElUXG5cbmZ1bmN0aW9uIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gIHZhciBzdGVwXG4gIHZhciBpc1xuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgdmlzaXRvciA9IHRlc3RcbiAgICB0ZXN0ID0gbnVsbFxuICB9XG5cbiAgaXMgPSBjb252ZXJ0KHRlc3QpXG4gIHN0ZXAgPSByZXZlcnNlID8gLTEgOiAxXG5cbiAgZmFjdG9yeSh0cmVlLCBudWxsLCBbXSkoKVxuXG4gIGZ1bmN0aW9uIGZhY3Rvcnkobm9kZSwgaW5kZXgsIHBhcmVudHMpIHtcbiAgICB2YXIgdmFsdWUgPSB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgbm9kZSAhPT0gbnVsbCA/IG5vZGUgOiB7fVxuICAgIHZhciBuYW1lXG5cbiAgICBpZiAodHlwZW9mIHZhbHVlLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID1cbiAgICAgICAgdHlwZW9mIHZhbHVlLnRhZ05hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyB2YWx1ZS50YWdOYW1lXG4gICAgICAgICAgOiB0eXBlb2YgdmFsdWUubmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IHZhbHVlLm5hbWVcbiAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICB2aXNpdC5kaXNwbGF5TmFtZSA9XG4gICAgICAgICdub2RlICgnICsgY29sb3IodmFsdWUudHlwZSArIChuYW1lID8gJzwnICsgbmFtZSArICc+JyA6ICcnKSkgKyAnKSdcbiAgICB9XG5cbiAgICByZXR1cm4gdmlzaXRcblxuICAgIGZ1bmN0aW9uIHZpc2l0KCkge1xuICAgICAgdmFyIGdyYW5kcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KG5vZGUpXG4gICAgICB2YXIgcmVzdWx0ID0gW11cbiAgICAgIHZhciBzdWJyZXN1bHRcbiAgICAgIHZhciBvZmZzZXRcblxuICAgICAgaWYgKCF0ZXN0IHx8IGlzKG5vZGUsIGluZGV4LCBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV0gfHwgbnVsbCkpIHtcbiAgICAgICAgcmVzdWx0ID0gdG9SZXN1bHQodmlzaXRvcihub2RlLCBwYXJlbnRzKSlcblxuICAgICAgICBpZiAocmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLmNoaWxkcmVuICYmIHJlc3VsdFswXSAhPT0gU0tJUCkge1xuICAgICAgICBvZmZzZXQgPSAocmV2ZXJzZSA/IG5vZGUuY2hpbGRyZW4ubGVuZ3RoIDogLTEpICsgc3RlcFxuXG4gICAgICAgIHdoaWxlIChvZmZzZXQgPiAtMSAmJiBvZmZzZXQgPCBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIHN1YnJlc3VsdCA9IGZhY3Rvcnkobm9kZS5jaGlsZHJlbltvZmZzZXRdLCBvZmZzZXQsIGdyYW5kcGFyZW50cykoKVxuXG4gICAgICAgICAgaWYgKHN1YnJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1YnJlc3VsdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIG9mZnNldCA9XG4gICAgICAgICAgICB0eXBlb2Ygc3VicmVzdWx0WzFdID09PSAnbnVtYmVyJyA/IHN1YnJlc3VsdFsxXSA6IG9mZnNldCArIHN0ZXBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvUmVzdWx0KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbQ09OVElOVUUsIHZhbHVlXVxuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZV1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-visit-parents/index.js\n");

/***/ })

};
;