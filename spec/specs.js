describe('foo', function() {
  it("is some function or expectation", function() {
    expect(foo('bar')).to.equal(false);
  });
});

describe('normalizeText', function() {
  it("removes non-alpha numeric characters", function() {
    expect(normalizeText('i.have?badc#ar$')).to.equal('ihavebadcar');
  });

  it("downcases all alphabetic characters", function() {
    expect(normalizeText('IHaVeBAdcar')).to.equal('ihavebadcar');
  });

});
