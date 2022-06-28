const express = require('express');
const app = express();
const puerto = 8080;
const rutas = require('./routes/index');
const { engine } = require('express-handlebars');
const path = require('path');

app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'main.hbs',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials'
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', rutas)

app.set('views', path.join(__dirname,'./views'))
app.set('view engine', 'hbs')


app.listen(puerto, (error)=>{
  if(error){
    console.log(`Se produjo un error ${error}`)
  }else{
    console.log(`Servidor escuchando puerto: ${puerto}`)
  }
})