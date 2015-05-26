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

describe('columns', function() {
  it("determines the correct number of columns to break the string into", function() {
    expect(columns('ihaveabadcar')).to.equal(3);
  });
});

describe('chunkArray', function() {
  it("has a number of elements equalling the rows given the columns required", function() {
    expect(chunkArray('ihaveabadcar').length).to.equal(4);
  });
});
