var items = new Array("cup", "plate", "saucer");
var x = items.toString()
console.log(x)
var x = items.join(".")
console.log(x)
var x = items.pop()
console.log(items)
console.log(x)
var items = new Array("cup", "plate", "saucer");
var x = items.shift()
console.log(x)
console.log(items)
var items = new Array("cup", "plate", "saucer");
var x = items.unshift()
console.log(x)
console.log(items)
var myGirls = ["preeti", "ash"];
var myBoys = ["rishu", "omansh", "jeevesh"];
var myChildren = myGirls.concat(myBoys);   
console.log(myChildren)
var arr1 = ["preeti", "ash"];
var arr2 = ["vivek", "rishu", "omansh"];
var arr3 = ["jeevesh", "shubham"];
var myChildren = arr1.concat(arr2, arr3);  
console.log(myChildren) 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = delete fruits[0];
console.log(x)
console.log(fruits)
fruits[0]= "kiwi"
console.log(fruits)
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Gauava"];
fruits.splice(2, 3);
console.log(fruits)
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Gauava"];
var x =fruits.slice(2,3)
console.log(x)
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Gauava"];
var x = fruits.sort()
console.log(x)
var y = fruits.reverse()
console.log(y)
var numbers = [2,8,1,6,4,9]
var x = numbers.sort()
console.log(x)