const express = require('express');
const alunoRouter = require('./alunosRouter')

const app = express();
app.use(express.json())

app.use('/alunos', alunoRouter)

app.get('/teste', (req, res) => {
    res.send('Bom dia!');
})

app.listen(3000, () => {
    console.log('server started')
})