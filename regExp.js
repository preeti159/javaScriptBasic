
var str = "Visit W3Schools!";
var n = str.search("W3Schools");
console.log(n)

var str = "Visit W3Schools";
var n = str.search(/w3schools/i);
console.log(n)

var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");
console.log(res)

var str = "Visit Microsoft!";
var res = str.replace(/microsoft/i, "W3Schools");
console.log(res)