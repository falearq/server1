const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());
app.use(router);

router.get('/', function(req,res){
     
    res.send('Hola desde GET')
});


router.post('/', function(req,res){
    res.send('Hola desde popoST')
});

router.put('/', function(req,res){
    res.send('Hola desde pUT')
});

router.get('/user', function(req,res){
    var name = req.body.name
    var lastname = req.body.lastname
    console.log(name);
    res.send('Hola desde get en user nene, eres'+ name + lastname)
});

router.patch('/', function(req,res){
    res.send('Hola desde PATCH')
});

router.delete('/', function(req,res){
    
    res.send('Hola desde Delete baby')
});

app.listen(3001);

console.log('Escuchando por: http://localhost:3001');
