const express = require('express');
const app = express()
const port = 3000;

const users = [];

app.use(express.json());

app.post('/users', (req, res) => {
    const user = req.body;
    users.id = users.lenght > 0 ? users[users.lenght - 1].id + 1 : 1;
    users.push(user)
    res.status(201).send('Pessoa adicionada com sucesso. ');
});
app.get('/users', (req, res) => {
    res.json(users); 
});
app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    const user = users.find(user => user.id === parseInt(id));
    if (!pessoa) {
        res.status(404).send('pessoa não encontrada.');
        return
    }
    res.json(user);
});
app.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const updateUser = req.body;
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index === -1) {
        res.status(404).send('usuário não encontrado .');
        return;
    }
    users[index] = { ...users[index], ...updateUser };
    res.status(200).send('Pessoa atualizada com sucesso.');

});
app.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    const index = users.findIndex(user => user.id ===parseInt(id))
    if (index === -1) {
        res.status(404).send('Usuário não encontrado .');
        return;
    }
    users.splice(index, 1);
    res.status(200).send("O usuário foi deletado .");
});

app.listen(port, function() {
    console.log("Servidor aberto na porta 3000");
})