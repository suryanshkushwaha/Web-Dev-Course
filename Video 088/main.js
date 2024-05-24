const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World2!')
})

app.get('/about', (req, res) => {
    res.send('About Us!')
})

app.get('/contact', (req, res) => {
    res.send('Contact Me!')
})

app.get('/blog', (req, res) => {
    res.send('Blog blog blog!')
  })
// app.get('/blog/intro-to-js', (req, res) => {
//     res.send('Hello intro to js!')
//   })
// app.get('/blog/intro-to-python', (req, res) => {
//     res.send('Hello intro to python!')
//   })

app.get('/blog/:slug', (req, res) => {
    //logic to fetch slug from the db
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
  })
app.get('/blog/:slug/:second', (req, res) => {
    //logic to fetch slug from the db
    res.send(`hello ${req.params.slug} and ${req.params.second}`)
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})