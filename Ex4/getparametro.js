const express = require('express');
const app = express()
const port = 3000;

app.use('/produto/:id', function(req, res, next) {
    identificador = req.params.id;
    console.log('ID do produto:', identificador);
    next();
});

app.get('/produto/:id', function(req, res){
    var responseText = '';
    responseText += 'ID : ' + identificador + '. Produto: Mirtilo';
    res.send(responseText);
});

app.listen(port, function(){
    console.log("Servidor rodando na porta 3000");
})
