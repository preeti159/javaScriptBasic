var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(double);

function double(value, index, array) {
  return value * 2;
}
console.log(numbers2)
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18)
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);
function myFunction(value){
    return value >18
}
console.log(over18)
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum)
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Mango");
console.log(a)
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a)
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first)

