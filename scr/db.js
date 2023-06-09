const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize('alunos', 'root', 'nb10205690', {
    dialect: 'mysql', host: 'localhost'
})

module.exports = dbSequelize