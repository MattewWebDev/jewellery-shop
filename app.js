//requires
const express = require("express");
const app = express();
const morgan = require('morgan')
const favicon = require('serve-favicon')
const path = require('path')

//express set
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.listen(3030);
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//routes

app.get('/', (req, res)=>{
  res.redirect('/index');
})

app.get('/index', (req, res)=>{
  res.render('index', {title: 'Main Page'})
})

//404

app.use((req, res)=>{
  res.status(404).render('404', {title: '404 Not found'})
})