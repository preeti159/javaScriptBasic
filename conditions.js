// var hour = 15
// if (hour < 18)
// {
//     greeting = "Good day"
//     console.log(greeting)
// }
// console.log(hour)
// var hour = 20
// if (hour < 18) {
//   greeting = "Good day";
//   console.log(greeting)
// } else 
// {
//   greeting = "Good evening";
//   console.log(greeting)
// }
// console.log(hour)
// var time = 30

// if(time <10) {
//     greeting = "Good morning"
//     console.log(greeting)
// }
// else if(time<20){
//     greeting = "Good day"
//     console.log(greeting)
// }
// else
// {
//     greeting = "Good evening"
//     console.log(greeting)
// }



function grade(marks) {
  var a = marks
  if(a>85) {
    Grade = "A"
    console.log("Student marks Grade: "+ Grade)
  }
  else if(a<=85 && a>80){
    Grade = "B"
    console.log("Student marks Grade: "+ Grade)
  }
  else if(a<=75 && a>70){
  Grade = "C"
  console.log("Student marks Grade: "+ Grade)
  }
  else{
    Grade = "D"
    console.log("Student marks Grade: "+ Grade)
  }
  console.log("Student marks in percentage: "+ a)
}



var a = percentage(100,95)
function percentage(total,percent) {
  var b = ((percent/100)*total)
  grade(b)
  return b;
}
console.log(percentage(100,95))



