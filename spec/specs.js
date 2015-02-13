describe("scrabbleScore", function() {
  it("will calculate the value of a single letter", function() {
    expect(scrabbleScore("Q")).to.eql(10);
  });

  it("will calculate the value of an entire word", function() {
    expect(scrabbleScore("QI")).to.eql(11);
  });
});
