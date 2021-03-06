var expect = require('expect.js');
var defaultFileStore = require('../../../lib/server/store/default');


describe('default file store', function() {
  var obj;
  
  beforeEach(function () {
    obj = {value1: 'value1'};
    defaultFileStore.mixInto(obj);
  });
  
  it('mixes into another object', function () {
    expect(obj.value1).to.equal('value1');
    expect(obj.cwd).to.equal('./');
  });
  
  it('has a default cwd', function () {
    expect(obj.cwd).to.equal('./');
  });
  
  it('gets the path', function () {
    expect(obj.getPath('/path')).to.equal('/path');
  });
});