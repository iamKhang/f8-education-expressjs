const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const port = 3000
const app = express()


// http logger
app.use(morgan('combined'))


// template engines
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));


app.get('/', (req, res) => {
  res.render('news')
})


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})