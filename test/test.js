var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-join');

describe('next/join', function () {

  it('nx.join: [NORMAL joine]', function () {
    var arr = ['a', 'b', 'c'];
    var rs1 = nx.join(arr);
    assert.equal(rs1, 'a,b,c');
  });


  it('nx.join: join with empty element', function () {
    var arr = ['a', null, 'b', 'c'];
    var rs1 = nx.join(arr);
    assert.equal(rs1, 'a,b,c');
  });

});
