var countWords = function(sentence) {
  return sentence.split(" ").length;
};

describe("countWords", function() {
  it("should count a single word", function() {
    expect(countWords("a")).toBe(1);
  });

  it("should count multiple words", function() {
    expect(countWords("Jasmine why")).toBe(2);
  });

  it("should be 0", function() {
    expect(countWords("")).toBe(0);
  });

  // it("should match to letter a", function() {
  //   expect(countWords("foo bar baz")).toMatch(/bar/);
  // });

});
