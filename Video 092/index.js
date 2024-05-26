const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    const links = [
        {
          href: '/',
          icon: '<svg>...</svg>',
          text: 'Home'
        },
        {
          href: 'collection',
          icon: '<svg>...</svg>',
          text: 'Collection'
        },
        {
          href: 'live',
          icon: '<svg>...</svg>',
          text: 'Live'
        }]
    res.render('index', { siteName: siteName, searchText: searchText, links })
})
app.get('/blog/:slug', (req, res) => {
    let blogName = "Adidas why and when?"
    let blogText = "Its a very good brand"
    res.render("blogpost", { blogName: blogName, blogText: blogText })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})