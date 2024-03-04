// Criando um servidor em express com node.js

const express = require("express")
const agendamentos = require("./banco.js")
const app = express()
const port = 8081

app.get("/", function(req, res){
    res.end("PAGINA INDEX")
})

// Sequelize ORM:

/*
    Abstrati os comandos de operações de SQL para manipularmos o respectivo banco de dados
    utilizando o nodejs

    npm install sequelize --save -> instala o sequelize

    npm install --save mysql2 -> instala o mysql
*/

// DESAFIO:

// CRIAR A SEGUINTE ROTA, QUE CADASTRA NO BANCO DE DADOS:

// SOLUÇÃO 01:

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req, res){
    agendamentos.create({
        nome: req.params.nome,
        endereco: req.params.endereco,
        bairro: req.params.bairro,
        cep: req.params.cep,
        cidade: req.params.cidade,
        estado: req.params.estado,
        observacao: req.params.observacao
    })
    res.end("CADASTRADO")
})

// SOLUÇÃO 02:

var receber = require('./banco.js')

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req, res){
    receber(
        nome = req.params.nome,
        endereco = req.params.endereco,
        bairro = req.params.bairro,
        cep = req.params.cep,
        cidade = req.params.cidade,
        estado = req.params.estado,
        observacao = req.params.observacao
    )
    res.end("CADASTRADO")
})

// SOLUÇÃO 03 (BOAS PRÁTICAS):

app.get("/cadastrar", (req, res) => {
    agendamentos.create({
        nome: req.query.nome,
        endereco: req.query.endereco,
        bairro: req.query.bairro,
        cep: req.query.cep,
        cidade: req.query.cidade,
        estado: req.query.estado,
        observacao: req.query.observacao
    }).then((agendamentos) => {
        console.log("Agendamento Criado")
    }).catch(() => {
        console.log("Erro")
    })
})

module.exports = app;

app.listen(port, function(){
    console.log('Servidor rodando na porta 8081')
})