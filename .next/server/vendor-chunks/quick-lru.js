"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/quick-lru";
exports.ids = ["vendor-chunks/quick-lru"];
exports.modules = {

/***/ "(ssr)/./node_modules/quick-lru/index.js":
/*!*****************************************!*\
  !*** ./node_modules/quick-lru/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\n\nclass QuickLRU {\n\tconstructor(options = {}) {\n\t\tif (!(options.maxSize && options.maxSize > 0)) {\n\t\t\tthrow new TypeError('`maxSize` must be a number greater than 0');\n\t\t}\n\n\t\tthis.maxSize = options.maxSize;\n\t\tthis.onEviction = options.onEviction;\n\t\tthis.cache = new Map();\n\t\tthis.oldCache = new Map();\n\t\tthis._size = 0;\n\t}\n\n\t_set(key, value) {\n\t\tthis.cache.set(key, value);\n\t\tthis._size++;\n\n\t\tif (this._size >= this.maxSize) {\n\t\t\tthis._size = 0;\n\n\t\t\tif (typeof this.onEviction === 'function') {\n\t\t\t\tfor (const [key, value] of this.oldCache.entries()) {\n\t\t\t\t\tthis.onEviction(key, value);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tthis.oldCache = this.cache;\n\t\t\tthis.cache = new Map();\n\t\t}\n\t}\n\n\tget(key) {\n\t\tif (this.cache.has(key)) {\n\t\t\treturn this.cache.get(key);\n\t\t}\n\n\t\tif (this.oldCache.has(key)) {\n\t\t\tconst value = this.oldCache.get(key);\n\t\t\tthis.oldCache.delete(key);\n\t\t\tthis._set(key, value);\n\t\t\treturn value;\n\t\t}\n\t}\n\n\tset(key, value) {\n\t\tif (this.cache.has(key)) {\n\t\t\tthis.cache.set(key, value);\n\t\t} else {\n\t\t\tthis._set(key, value);\n\t\t}\n\n\t\treturn this;\n\t}\n\n\thas(key) {\n\t\treturn this.cache.has(key) || this.oldCache.has(key);\n\t}\n\n\tpeek(key) {\n\t\tif (this.cache.has(key)) {\n\t\t\treturn this.cache.get(key);\n\t\t}\n\n\t\tif (this.oldCache.has(key)) {\n\t\t\treturn this.oldCache.get(key);\n\t\t}\n\t}\n\n\tdelete(key) {\n\t\tconst deleted = this.cache.delete(key);\n\t\tif (deleted) {\n\t\t\tthis._size--;\n\t\t}\n\n\t\treturn this.oldCache.delete(key) || deleted;\n\t}\n\n\tclear() {\n\t\tthis.cache.clear();\n\t\tthis.oldCache.clear();\n\t\tthis._size = 0;\n\t}\n\n\t* keys() {\n\t\tfor (const [key] of this) {\n\t\t\tyield key;\n\t\t}\n\t}\n\n\t* values() {\n\t\tfor (const [, value] of this) {\n\t\t\tyield value;\n\t\t}\n\t}\n\n\t* [Symbol.iterator]() {\n\t\tfor (const item of this.cache) {\n\t\t\tyield item;\n\t\t}\n\n\t\tfor (const item of this.oldCache) {\n\t\t\tconst [key] = item;\n\t\t\tif (!this.cache.has(key)) {\n\t\t\t\tyield item;\n\t\t\t}\n\t\t}\n\t}\n\n\tget size() {\n\t\tlet oldCacheSize = 0;\n\t\tfor (const key of this.oldCache.keys()) {\n\t\t\tif (!this.cache.has(key)) {\n\t\t\t\toldCacheSize++;\n\t\t\t}\n\t\t}\n\n\t\treturn Math.min(this._size + oldCacheSize, this.maxSize);\n\t}\n}\n\nmodule.exports = QuickLRU;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcXVpY2stbHJ1L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyIvVXNlcnMvbWFjL0RvY3VtZW50cy9DcmFja2VkL0Zyb250LWVuZC9zdGFydHVwL25vZGVfbW9kdWxlcy9xdWljay1scnUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBRdWlja0xSVSB7XG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuXHRcdGlmICghKG9wdGlvbnMubWF4U2l6ZSAmJiBvcHRpb25zLm1heFNpemUgPiAwKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignYG1heFNpemVgIG11c3QgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDAnKTtcblx0XHR9XG5cblx0XHR0aGlzLm1heFNpemUgPSBvcHRpb25zLm1heFNpemU7XG5cdFx0dGhpcy5vbkV2aWN0aW9uID0gb3B0aW9ucy5vbkV2aWN0aW9uO1xuXHRcdHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XG5cdFx0dGhpcy5vbGRDYWNoZSA9IG5ldyBNYXAoKTtcblx0XHR0aGlzLl9zaXplID0gMDtcblx0fVxuXG5cdF9zZXQoa2V5LCB2YWx1ZSkge1xuXHRcdHRoaXMuY2FjaGUuc2V0KGtleSwgdmFsdWUpO1xuXHRcdHRoaXMuX3NpemUrKztcblxuXHRcdGlmICh0aGlzLl9zaXplID49IHRoaXMubWF4U2l6ZSkge1xuXHRcdFx0dGhpcy5fc2l6ZSA9IDA7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5vbkV2aWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHRoaXMub2xkQ2FjaGUuZW50cmllcygpKSB7XG5cdFx0XHRcdFx0dGhpcy5vbkV2aWN0aW9uKGtleSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMub2xkQ2FjaGUgPSB0aGlzLmNhY2hlO1xuXHRcdFx0dGhpcy5jYWNoZSA9IG5ldyBNYXAoKTtcblx0XHR9XG5cdH1cblxuXHRnZXQoa2V5KSB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNhY2hlLmdldChrZXkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9sZENhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMub2xkQ2FjaGUuZ2V0KGtleSk7XG5cdFx0XHR0aGlzLm9sZENhY2hlLmRlbGV0ZShrZXkpO1xuXHRcdFx0dGhpcy5fc2V0KGtleSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdHNldChrZXksIHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHRoaXMuY2FjaGUuc2V0KGtleSwgdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRoYXMoa2V5KSB7XG5cdFx0cmV0dXJuIHRoaXMuY2FjaGUuaGFzKGtleSkgfHwgdGhpcy5vbGRDYWNoZS5oYXMoa2V5KTtcblx0fVxuXG5cdHBlZWsoa2V5KSB7XG5cdFx0aWYgKHRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNhY2hlLmdldChrZXkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm9sZENhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5vbGRDYWNoZS5nZXQoa2V5KTtcblx0XHR9XG5cdH1cblxuXHRkZWxldGUoa2V5KSB7XG5cdFx0Y29uc3QgZGVsZXRlZCA9IHRoaXMuY2FjaGUuZGVsZXRlKGtleSk7XG5cdFx0aWYgKGRlbGV0ZWQpIHtcblx0XHRcdHRoaXMuX3NpemUtLTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5vbGRDYWNoZS5kZWxldGUoa2V5KSB8fCBkZWxldGVkO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5jYWNoZS5jbGVhcigpO1xuXHRcdHRoaXMub2xkQ2FjaGUuY2xlYXIoKTtcblx0XHR0aGlzLl9zaXplID0gMDtcblx0fVxuXG5cdCoga2V5cygpIHtcblx0XHRmb3IgKGNvbnN0IFtrZXldIG9mIHRoaXMpIHtcblx0XHRcdHlpZWxkIGtleTtcblx0XHR9XG5cdH1cblxuXHQqIHZhbHVlcygpIHtcblx0XHRmb3IgKGNvbnN0IFssIHZhbHVlXSBvZiB0aGlzKSB7XG5cdFx0XHR5aWVsZCB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHQqIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmNhY2hlKSB7XG5cdFx0XHR5aWVsZCBpdGVtO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLm9sZENhY2hlKSB7XG5cdFx0XHRjb25zdCBba2V5XSA9IGl0ZW07XG5cdFx0XHRpZiAoIXRoaXMuY2FjaGUuaGFzKGtleSkpIHtcblx0XHRcdFx0eWllbGQgaXRlbTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRnZXQgc2l6ZSgpIHtcblx0XHRsZXQgb2xkQ2FjaGVTaXplID0gMDtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiB0aGlzLm9sZENhY2hlLmtleXMoKSkge1xuXHRcdFx0aWYgKCF0aGlzLmNhY2hlLmhhcyhrZXkpKSB7XG5cdFx0XHRcdG9sZENhY2hlU2l6ZSsrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLm1pbih0aGlzLl9zaXplICsgb2xkQ2FjaGVTaXplLCB0aGlzLm1heFNpemUpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVpY2tMUlU7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/quick-lru/index.js\n");

/***/ })

};
;