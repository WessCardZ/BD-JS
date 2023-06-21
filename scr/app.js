const express = require('express');
const env = require('dotenv/config')
const alunoRouter = require('./alunosRouter')

const database = require('./db')
const app = express();
app.use(express.json())

app.use('/alunos', alunoRouter)

// app.get('/teste', (req, res) => {
//     res.send('Bom dia!');
// })

app.listen(3000, async () => {
    const resultDb = await database.sync({ alter: true })
    // console.log(resultDb)
    console.log('server started')
})