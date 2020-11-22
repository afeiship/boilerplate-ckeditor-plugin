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
