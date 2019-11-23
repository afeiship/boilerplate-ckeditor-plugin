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
