const fs = require('fs')

fs.writeFile('suryansh2.txt', 'Suryasnh is very good boy', ()=>{
    console.log('done')
    fs.readFile('suryansh2.txt', (error, data)=>{
        console.log(error, data.toString())
        //again
        fs.writeFile('suryansh3.txt', 'Suryasnh is very good boy', ()=>{
            console.log('done')
            fs.readFile('suryansh3.txt', (error, data)=>{
                console.log(error, data.toString())
                //again
                fs.writeFile('suryansh4.txt', 'Suryasnh is very good boy', ()=>{
                    console.log('done')
                    fs.readFile('suryansh4.txt', (error, data)=>{
                        console.log(error, data.toString())
                    })
                })
            })
        })
    })
})