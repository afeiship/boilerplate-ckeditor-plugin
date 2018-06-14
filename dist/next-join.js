(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.join = function (inArray, inSep) {
    return inArray.filter(function(item){
      return !!item;
    }).join(inSep);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.join;
  }

}());
