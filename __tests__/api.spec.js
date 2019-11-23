const nx = require('@feizheng/next-js-core2');
require('../src/next-join');

describe('api.basic test', () => {
  test('nx.join: [NORMAL joine]', function() {
    var arr = ['a', 'b', 'c'];
    var rs1 = nx.join(arr);
    expect(rs1).toBe('a,b,c');
  });

  test('nx.join: join with empty element', function() {
    var arr = ['a', null, 'b', 'c'];
    var rs1 = nx.join(arr);
    expect(rs1).toBe('a,b,c');
  });
});
