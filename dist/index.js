/*!
 * name: @jswork/next-join
 * description: Better join for array.
 * homepage: https://github.com/afeiship/next-join
 * version: 1.0.0
 * date: 2020-11-22 17:00:53
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.join = function (inArray, inSep) {
    return inArray.filter(Boolean).join(inSep);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.join;
  }
})();
