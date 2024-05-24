import fs from "fs/promises"

let a = await fs.readFile('suryansh.txt')

let b = await fs.writeFile('suryansh.txt', '\n\n\n\n\n this is cool promise!')
console.log(a.toString(), b)