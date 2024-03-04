// Fazendo a conexão com o banco de dados - Sequelize

const Sequelize = require('sequelize');
const sequelize = new Sequelize("desafiobd", "root", '', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function() {
    console.log("Servidor Ativo!")
}).catch(function(erro){
    console.log("Falha na conexão: " + erro)
})

// Para criar o banco de dados
const agendamentos = sequelize.define("agendamentos", {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    observacao: {
        type: Sequelize.STRING
    }
})

// module.exports = agendamentos;

// SOLUÇÃO 02: 

var receber = function(nome, endereco, bairro, cep, cidade, estado, observacao) {
    agendamentos.create({
        nome, endereco, bairro, cep, cidade, estado, observacao
    })
}

module.exports = receber;

// SOLUÇÃO 03: 

module.exports = agendamentos;

// agendamentos.sync({force: true})

// Para cadastrar dados no banco

// agendamentos.create({
//     nome: "Guilherme",
//     endereco: "Rua do Guilherme",
//     bairro: "Vila Guilherme",
//     cep: "12312-123",
//     cidade: "São Paulo",
//     observacao: "Aluno da Fatec Zona Leste"
// })