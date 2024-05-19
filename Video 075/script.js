// console.log("Harry is a hacker")
// console.log("Rohan is a hecker")

// setTimeout(()=> {
//     console.log("I am inside settimeout")
// }, 2000)    // it will after 2 seconds

// console.log("The End")



// console.log("Harry is a hacker")
// console.log("Rohan is a hecker")

// setTimeout(()=> {
//     console.log("I am inside settimeout")
// }, 0)    // even if we change the time to 0 it will still print afterwards

// console.log("The End")



console.log("Harry is a hacker")
console.log("Rohan is a hecker")

setTimeout(()=> {
    console.log("I am inside settimeout")
}, 0)   

setTimeout(()=> {
    console.log("I am inside settimeout 2")
}, 0)   

console.log("The End")

const callback = (arg) => {
    console.log(arg)
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script")
  sc.src = src;
  sc.onload = callback("suryansh")
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )