const fs = require('fs')

// console.log(fs)

console.log('starting')
// fs.writeFileSync('suryansh.txt', "Suryansh is a good boy!!")
fs.writeFile('suryansh2.txt', 'Suryasnh is very good boy', ()=>{
    console.log('done')
    fs.readFile('suryansh2.txt', (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile('suryansh.txt', 'surryrobot', (e,d)=>{
    console.log(d.toString())
})

console.log('ending')