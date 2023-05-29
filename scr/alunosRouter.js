const express = require('express');

const Aluno = require('./alunoModel')

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {

    res.send(`GET ALL`)
})

router.get('/:id', (req, res) => {
    res.send(`GET ID: ${req.params.id}`)
})

router.get('/matricula/:matricula', (req, res) => {
    res.send(`GET Matricula: ${req.params.matricula}`)
})

router.put('/:id', (req, res) => {//atualizar
    res.send(`PUT: ${JSON.stringify(req.body)}`)
})

router.post('/', async (req, res) => {//salvar
    const aluno = await Aluno.create(req.body);

    res.send(`POST: ${JSON.stringify(aluno)}`)
})

router.delete('/:id', (req, res) => {//delete
    res.send(`DELETE: ${req.params.id}`)
})

module.exports = router;