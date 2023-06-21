const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize('alunos', 'root', 'coloque a senha do seu MYSQL', {
    dialect: mysql, host: localhost
})

// const dbSequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = dbSequelize