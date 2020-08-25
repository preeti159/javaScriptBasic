//function myFunction() {
//  var fruits = ["Banana", "Orange", "Apple", "Mango"];
//  a = Array.isArray(fruits)
//console.log(a)
//}
//myFunction()


// var txt = "";
// var numbers = ["*","*","*","*","*", "*"];
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt = txt + value 
//   console.log(txt)
// }

// var obj = {name:"John", age:30, city:"New York"};
// var myJSON = JSON.stringify(obj);
// console.log(myJSON)


// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//   console.log(value * 2);
// }


var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(result) {
  console.log(result > 18);
}


