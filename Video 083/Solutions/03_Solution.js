// The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let string = "suryansh"

function mirrorMirror(string) {
    const reversed = string.split('').reverse().join('')
    const final = string + reversed
    return final
}

mirrorMirror(string)