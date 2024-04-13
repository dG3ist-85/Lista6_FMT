const express = require("express")
const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send("Projeto Node.js")
});

app.listen(port, function(){
    console.log("Executando servidor na porta 3000.")
}) 
// http://localhost:3000/