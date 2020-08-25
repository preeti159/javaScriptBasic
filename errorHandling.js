var x 
try {
    x=y+1
}
catch(err) {
    var a = err.name
    console.log(a)
}


var x 
//var y = 6
try {
    x=y+1
    console.log(x)
}
catch(err) {
    var a = err.name
    console.log("initialize the value of y")
}


var a = simpleIntrest(4,5,5)
function simpleIntrest(principalAmount,rate,time) {
    var b = ((principalAmount*rate*time)/100)
    return b;
}
console.log(simpleIntrest(4,5,5))



var Amount = 100
var yearlyRate = 5
var yearlyTime = 8

function SI(principalAmount, rate, time)

{
    var c = ((principalAmount*rate*time)/100)
    console.log("Calculated Simple Intrest: ",c)
}


try{
SI(Amount,yearlyRate,yearlyTime)
}
catch(err)
{
    console.log("time is not defined")
}

//rangeError Example
var num = 3
try{
    num.toPrecision(1)
}
catch(err)
{
    console.log(err.name)
}

//syntaxError Example
try{
    eval("alert('Hello)")
}
catch(err)
{
    console.log(err.name)
}

//typeError Example
var num = 55
try{
    num.toUpperCase()
}
catch(err)
{
    console.log(err.name)
}

//uriError Example
try{
    decodeURI("%%%")
}
catch(err)
{
    console.log(err.name)
}

var z = 7
try {
    if(z == "") throw "is empty";
    if(isNaN(z)) throw "not a number";
   // z= Number(z);
    if(z>10) throw "too low";
    if(z<3) throw "too high";
}
catch(err)
{
    console.log(err.name)
}
//finally{ 
//   console.log(z)
//}























