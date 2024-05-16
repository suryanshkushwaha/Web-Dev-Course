// find factorial of any number using reduce and for loops

const factorial = (n) => {
    let arr =[]
    for (let index = 0; index < n; index++) {
        arr[index] = index + 1
    }

    return arr.reduce((a,b) => {
        return a*b
    })
}

console.log(factorial(3))