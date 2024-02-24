const path = require('path')
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const port = 3000
const app = express()

const route = require('./routes');
const db = require('./config/db')


db.connect();


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
app.set('views', path.join(__dirname,'resources','views'));

//Routes init
route(app)


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})