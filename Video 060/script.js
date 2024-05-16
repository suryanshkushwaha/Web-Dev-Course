// JS Strings

let a = "suryansh";

console.log(a);
console.log(a[0]);
console.log(a[10]); // undefined - does not throw error

console.log(a.length);

let name = "surry";
let friend = "rohan";
console.log("his name is " + name + " and his friends name is "+ friend);
console.log(`his name is ${name} and his friends name is ${friend}`); // string interpolation

let escapeseq = "roh\"an"
//other method
let rohan = `roh"an`  // we usually use this its better

// some string functions
console.log(friend.toUpperCase())
console.log(friend.toLowerCase())

console.log(friend.slice(2, 4))
console.log(friend.slice(2))

console.log(friend.replace("ro", "88"))   // if two occurences, then only changes the first one

console.log(friend.concat(name))
console.log(friend.charAt(0))
console.log(friend.charAt(110)) // returns blankspace

// strings are immutable!