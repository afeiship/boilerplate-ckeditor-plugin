/*!
 * name: @feizheng/next-join
 * url: https://github.com/afeiship/next-join
 * version: 1.0.0
 * date: 2019-11-23T07:33:51.037Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.join = function(inArray, inSep) {
    return inArray
      .filter(function(item) {
        return !!item;
      })
      .join(inSep);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.join;
  }
})();

//# sourceMappingURL=next-join.js.map
