require('marko/node-require')

// configuração do express e marko
const express = require('express')
const port = 3000
var markoExpress = require("marko/express")
const app = express()
app.use(markoExpress())

app.use(express.static('public'));
app.use(express.static('files'));

const bodyParser = require('body-parser')

const AlunoDao = require('./dao/aluno-dao')
const dao = new AlunoDao()



// configuração do bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// configuração do connect-flash
const session = require('express-session');
const flash = require('connect-flash')
app.use(session({ 
    secret:'geeksforgeeks', 
    saveUninitialized: true, 
    resave: true
}));
app.use(flash()) 


// rota principal, listagem dos alunos
app.get('/', (req, res) => {
    res.marko(require('./templates/home.marko'))
    
})

app.get('/cadastro', (req,res) => {
    res.marko(require('./templates/cadastro.marko'))
})

app.listen(port, '0.0.0.0',() => {
    console.log(`Servidor iniciado na porta ${port}`)
})
