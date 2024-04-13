const express = require("express")
const app = express();
const port = 3000;
 
app.get("/sobre", function(require, response){
    response.send("Esta aplicação utilizou a rota /sobre .")
})
app.get("/contato", function(req, res){
    res.send("Esta aplicação utilizou a rota /contato .")
}) 

app.listen(port, function(){
    console.log("Servidor aberto na porta 3000.")
 })
