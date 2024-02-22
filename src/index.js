const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const port = 3000
const app = express()


app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded(
 {extended: true}
))
app.use(express.json())

// http logger
app.use(morgan('combined'))


// template engines
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (request, response) => {
  response.render('news')
})

app.get('/search', (request, response) => {
  response.render('search')
})

app.post('/search', (request, response) => {
  console.log(request.body)
  response.send("Chào")
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})