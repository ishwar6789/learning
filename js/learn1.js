console.log("learn1 javascript function is called");


///Difference between == and ===
var a =1;
var b ="1";
var c ="1.0";

// ==  does not compare the types only the values so b fails
console.log(a==b);
console.log(b==c); // this fails 
console.log(a==c);

// === first compares the type and then the values

console.log(a===b); //fails
console.log(b===c);  //fails
console.log(a===c); //fails

// != checks only values
console.log(a!=b); //
console.log(b!=c);  //true
console.log(a!=c); //


// !== compares to type  and then values are compare
console.log(a!==b); //true
console.log(b!==c);  //
console.log(a!==c); //