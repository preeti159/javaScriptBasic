let a = 10;
console.log(a)
{
  const a = 2;
  console.log(a)
}


var x = 2;         // Allowed
const x = 2;
console.log(x)       // Not allowed
{
  let x = 2;     // Allowed
  const x = 2; 
  console.log(x)  // Not allowed
}
