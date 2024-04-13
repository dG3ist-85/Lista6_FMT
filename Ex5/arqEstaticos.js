const express = require("express");
const app = express();
const port = 3000;
// get http://localhost:3000/about.html
// get http://localhost:3000/index.js
// get http://localhost:3000/syle.css
app.use(express.static('public'));
// app.get("/", function(req, res) {
//     res.sendFile(public/about.html);
// });

app.listen(port, function(){
    console.log("Servidor rodando na porta 3000");
})