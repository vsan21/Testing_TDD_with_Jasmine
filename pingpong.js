function Add(num) {
  if(num === '') {
    return 0;
  } else {
      var numSplit = num.split(",")   //splits by ,

      var total = 0;
      for (let i = 0; i < numSplit.length; i++) {
        //numSplit[0] = '1' --> parseFloat to turn it into a number --> add that number to total (reassigns with new value)
        total += parseFloat(numSplit[i]);
      }
      return total;

    }
}

describe("Add", function() {
  it("should return 0", function() {
    expect(Add("")).toBe(0);
  });

  it("should return the argument of one number", function() {
    expect(Add("8")).toBe(8);
  });

  it("should return the sum of two arguments (two numbers)", function() {
    expect(Add("1,9")).toBe(10);
  });

});
