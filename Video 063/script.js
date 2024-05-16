let a = [1, 2, 3, 4, 5, 7]
let b = ["lets", "go"]

console.log(a)
console.log(a.length)
console.log(a[0])

a[0] = 1000

console.log(a)      // can change values here but cannot change values in string

console.log(typeof a)       // object

console.log(a.toString())   // converts to string with comma

console.log(a.join(" and "))    // converts to string with " and " or whatever you type

console.log(a.pop())    // removes the last elemet
console.log(a)

console.log(a.push(100))    // adds last element as 100
console.log(a)

console.log(a.push("Suryansh"))    // adds last element as Suryansh
console.log(a)

console.log(a.shift())    // removes the first element
console.log(a)

console.log(a.unshift("Jack"))    // adds last element as Suryansh
console.log(a)

console.log(a.concat(b))    // concats two or more

console.log(a.sort())   // takes optional compare function as well

console.log(a.splice(2, 3))     // takes out 3 number after key 2 in the array
console.log(a)

console.log(a.splice(2, 3, 23, "Harry"))     // takes out 3 number after key 2 in the array then adds 23 and "Harry"
console.log(a)

// slice
// reverse