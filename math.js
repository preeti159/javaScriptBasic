var x = Math.PI
console.log(x)
var x = Math.round(4.7)
console.log(x)
var x = Math.pow(8,2)
console.log(x)
var x = Math.sqrt(64)
console.log(x)
var x = Math.abs(-4.7)
console.log(x)
var x = Math.ceil(4.1)
console.log(x)
var x = Math.floor(4.7)
console.log(x)
var x = Math.sin(90 * Math.PI / 180); 
console.log(x)
var x = Math.cos(0 * Math.PI / 180);    
console.log(x)
var x = Math.min(0, 150, 30, 20, -8, -200);  
console.log(x)
var x = Math.max(0, 150, 30, 20, -8, -200);  
console.log(x)
var x = Math.random(1,5);     
console.log(x)
var x = Math.floor(Math.random() * 10);   
console.log(x)
Math.floor(Math.random() * 11);  
console.log(x)
var x = Math.floor(Math.random() * 10) + 1;  
console.log(x)
var x = Math.floor(Math.random() * 100) + 1; 
console.log(x)


function getRndInteger(min, max) {

return Math.floor(Math.random() * (max - min) ) + min;

}

var y = getRndInteger(20,100)
console.log(y)
function  getRndInteger(min,max) {
    return Math.floor(Math.random()*(max-min+1)) + min
}
    var y = getRndInteger(20,100)
    console.log(y)

