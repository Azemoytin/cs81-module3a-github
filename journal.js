// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}

// Check if a number is even
function isEven(n) {
  return n % 2 === 0;
}

// Sum an array of numbers
function sum(arr) {
  return arr.reduce((acc, x) => acc + x, 0);
}

// Find the largest number in an array
function max(arr) {
  return Math.max(...arr);
}

// Reverse a string
function reverse(str) {
  return str.split('').reverse().join('');
}
