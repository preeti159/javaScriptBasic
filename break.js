for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text = "The number is " + i ;
  console.log(text)
}


var cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text = cars[0] 
  text = cars[1] 
  break list;
  text = cars[2] 
  text = cars[3] 
}
console.log(text)