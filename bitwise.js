var a = 5
var b = 1
var c = a&b
console.log(c)

var a = 5
var b = 1
var c = 5|1
console.log(c)

var a = 5
var b = ~5
console.log(b)

var a = 5
var b = 1
var c = 5<<1
console.log(c)

var a = 5
var b = 1
var c = 5^1
console.log(c)

var a = 5
var b = 1
var c = 5>>1
console.log(c)

var a = 5   //1010
var b = 1   //0001
var c = a>>>b
console.log(c)



var x = ~6
console.log(x)



function dec2bin(dec){

    console.log((dec >>> 0).toString(2))
  return ;
}


dec2bin(5)