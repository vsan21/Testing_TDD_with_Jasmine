//Q1: write a function that takes a "num" parameter and return the factorial of it (i.e. if num = 4 --> 4*3*2*1)

function Factorial(num) {
  var sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

describe ('Factorial', function() {
  it('should return the factorial of the argument', function() {
    expect(Factorial(4)).toBe(24);
  });
});


//Q2: given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  var result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i].repeat(2));
  }
  return result.join('');
}

describe('doubleChar', function() {
  it('should return a new string where each character is repeated once', function() {
    expect(doubleChar('abcd')).toMatch('aabbccdd');
  });
});

//Q3: Convert number to a reversed array of digits
function digitize(num) {
  // var result = [];
  // var str = num.toString().split('').reverse();
  // for (let i = 0; i < str.length; i++) {
  //   result.push(parseFloat(str[i]));
  // }
  // return result;

  //OR  .map() returns a new array with the results of calling a provided function on every element. Here we are turning the array of strings into array of numbers.
  return String(num).split('').map(Number).reverse();
}

describe('digitize', function() {
  it('should split the argument into individual items of an array, and then reverse their order', function() {
    expect(digitize(5281)).toEqual([1, 8, 2, 5]);
  });
});

//Q4: Given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.
function alphabetPosition(text) {
  let alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  let result = [];
  //The ^ means "anything not in this list of characters".
  //gi means "replace all of these that you find, without regard to case".
  //Output: 'IlovemydogsMomoandHoney'
  let regex = text.replace(/[^a-zA-Z]/gi, '')
  let array = regex.toLowerCase().split('');
  for (let i = 0; i < array.length; i++) {
    result.push(alphabet.indexOf(array[i]) + 1);
    //alphabet.indexOf(a) + 1 --> 0 + 1 = 1 --> (a: 1)
  }
  return result.join(' ');
}

describe('alphabetPosition', function() {
  it('should return new string where every letter is replaced with its alpha-numeric position', function() {
    expect(alphabetPosition('I love my dogs Momo and Honey')).toMatch('9 12 15 22 5 13 25 4 15 7 19 13 15 13 15 1 14 4 8 15 14 5 25');
  });

  it('should return new string where every letter is replaced with its alpha-numeric position', function() {
    expect(alphabetPosition("The sunset sets at twelve o' clock.")).toMatch("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
  });

});

//Q5:
