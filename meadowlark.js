const express = require('express')
// const expressHandlebars = require('express-handlebars')
const { engine } = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3040
const fortune = require('./lib/fortune')

app.use(express.static(__dirname + `/public`))

app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: 'views/layouts'
}))

app.set('view engine', '.hbs')

app.get('/', (req, res) => res.render('home'))

app.get('/about', (req, res) => {
    res.render('about', { fortune: fortune.getFortune() })
})

// Пользовательская страница 404
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

// Пользовательская страница 500
app.use((err, req, res) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    `Express запущен на http://localhost:${port}; нажмите Ctrl+C для завершения.` )
)