const express = require('express');

const Aluno = require('./alunoModel')

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    const alunos = await Aluno.findAll();
    res.send(alunos)
})

router.get('/:id', async (req, res) => {
    const aluno = await Aluno.findByPk(req.params.id);
    res.send(aluno)
})

router.get('/matricula/:matricula', async (req, res) => {
    const aluno = await Aluno.findOne({
        where: {
            matricula: req.params.matricula
        }
    })
    res.send(aluno)
})
router.post('/', async (req, res) => {//salvar
    const aluno = await Aluno.create(req.body);
    res.send(aluno)
})

router.put('/:id', (req, res) => {//atualizar
    const aluno = Aluno.create(JSON.parse(req.body));
    res.send(aluno);
})


router.delete('/:id', (req, res) => {//delete
    res.send(`DELETE: ${req.params.id}`)
})

module.exports = router;