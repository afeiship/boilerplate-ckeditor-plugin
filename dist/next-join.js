/*!
 * name: @feizheng/next-join
 * url: https://github.com/afeiship/next-join
 * version: 1.0.2
 * date: 2020-02-16T17:39:39.834Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.join = function(inArray, inSep) {
    return inArray.filter(Boolean).join(inSep);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.join;
  }
})();

//# sourceMappingURL=next-join.js.map
