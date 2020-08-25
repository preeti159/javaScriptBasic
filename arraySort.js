var numbers = [2,8,1,6,4,9]
var x = numbers.sort()
console.log(x)
var alphabet = [2,4,8,3,4,8]
var x = numbers.sort(function(a,b){return a-b})    
console.log(x)
var points = [40, 100, 1, 5, 25, 10];
var x = points.sort(function(a, b){return 0.5 - Math.random()});
console.log(x)
var cars = [
 {type:"Volvo", year:2016},
   {type:"Saab", year:2001},
  {type:"BMW", year:2010}
]
cars.sort(function(a, b){return a.year - b.year});
console.log(cars)
cars.sort(function(a, b){
  var x = a.type.toLowerCase();
  var y = b.type.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
  });




