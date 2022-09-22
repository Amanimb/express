const express=require('express')

const app=express()

const PORT=5000


app.use(express.json())

app.get('/oo/:id',(req, res)=>{
res.send(`<h1>GoMyCode ${req.params.id}</h1>`)})


app.get('', function (req, res) {
    res.send('<h1>Home</h1>');
  }).get('/contact', function (req, res) {
    res.send('<h1>Contact</h1>');
  }).get('/service', function (req, res) {
    res.send('<h1>Service</h1>');
  }).all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
  }).use(function(req, res, next){
      res.status(404).send('Page introuvable !');
  });

app.listen(PORT,(err)=> err ? console.log(err):console.log(`Server is running on port ${PORT}...`))