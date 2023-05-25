const { Sequelize, DataTypes, NOW } = require('sequelize');
const db = require('./db');
const { now } = require('sequelize/types/utils');

const Aluno = db.define('aluno', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    matricula: {
        type: DataTypes.STRING,
        unique: true
    },
    data_nascimento: {
        type: DataTypes.DATEONLY
    },
    pontuação: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'aluno'
});

module.exports = Aluno;