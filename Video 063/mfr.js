let a = [1, 93, 5, 6, 88]

// let newa = []

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     newa.push(element ** 2)
// }


let newarr = a.map(e => {
    return e * e
})
console.log(newarr)

newarr = newarr.filter(e => {
    return e > 7
})
console.log(newarr)

let arr2 = [1, 2, 3, 4, 5]
console.log(arr2.reduce((a, b) => { return a * b }))   // factorial of 5 using reduce, try to understand how it's used

console.log(Array.from("Suryansh"))     // creates array from another object
