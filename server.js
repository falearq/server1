
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

var app = express();
let hayData = bodyParser.json();
console.log(typeof hayData)
/*function getUsers(hayData){
   let equisGoey = hayData.map(user=>console.log(user))
    return equisGoey

}*/

app.use(hayData);
app.use(router);

router.get('/', function(req,res){
     
    res.send('hola desd GET, JOTO')
});


router.post('/', function(req,res){
    res.send('Hola desde popoST')
});

router.put('/', function(req,res){
    res.send('Hola desde pUT')
});

router.get('/user', function(req,res){
    var name = req.body[0].name
    var lastname = req.body[0].lastname
    console.log(name + ' ' + lastname);
    res.send('Hola desde get en user nene, tu usuario es '+ name + " " + lastname)
});

router.patch('/', function(req,res){
    res.send('Hola desde PATCH')
});

router.delete('/', function(req,res){
    
    res.send('Hola desde Delete, aquí se borran los usuarios')
});

app.listen(3001);

console.log('Escuchando por: http://localhost:3001');
