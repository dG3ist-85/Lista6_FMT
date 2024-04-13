const express = require('express');
const app = express()
const port = 3000;

app.use('/user/:id', function (req, res, next) {
    metodo = req.method;
    console.log('Request Type:', metodo);
    next();
});

app.use('/user/:id', function(req, res, next) {
    url = req.originalUrl;
    console.log('Request URL:', url);
    next();
});

var requestTime = function (req, res, next) {
    req.requestTime = new Date(); 
    next();
};
app.use(requestTime);

app.get('/user/:id', function(req, res){
    var responseText = '';
    responseText += 'Tipo da requisição: ' + metodo + '. Rota URL: ' + url + '. Requisição feita em: ' + req.requestTime + '';
    res.send(responseText);
});

app.listen(port, function(){
    console.log("Servidor rodando na porta 3000");
})
