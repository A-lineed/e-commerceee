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

const cadastro = require('./dao/aluno-dao')
const dao = new cadastro()



// configuração do bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// configuração do connect-flash
const {responde} = require('express')
const session = require('express-session');
const flash = require('connect-flash')
app.use(session({ 
    secret:'geeksforgeeks', 
    saveUninitialized: true, 
    resave: true
}));
app.use(flash()) 

let nomeusu = Array();
nomeusu["nome"] = "";
// rota principal, listagem dos alunos
app.get('/', (req, res) => {
 
    res.marko(require('./templates/home.marko'), nomeusu)
    
})
app.get('/login' ,(req,res)=>{
    let response = {
        error_messages: req.flash('error'),
        success_messages: req.flash('success'),
        results:[]
    };
    res.marko(require('./templates/login.marko'), response)
})
app.post('/into' , (req,res)=>{
    console.log(req.body)
    dao.into(req.body).then(results=>{
        console.log(results[0]);

        if(!results[0]){
            req.flash('error', 'usuario não existe');
           
            res.redirect('/login');
        }else if(results[0].email == req.body.email && results[0].senha == req.body.senha){
            req.flash('success' , 'conectado com sucesso')
            nomeusu["nome"]=results[0].nome;
            res.redirect('/')
        }else{
            req.flash('error', 'usuario não existe');
           
            res.redirect('/login');
        }
    })
})

app.get('/cadastro', (req,res) => {
    res.marko(require('./templates/cadastro.marko'))
})

app.post('/save' , (req,res)=>{
    console.log(req.body);
   dao.save(req.body).then((results)=>{
       req.flash('success', 'cadastro feito com sucesso');
       res.redirect('/');
   }).catch(err =>{
        console.log(err);
        req.flash('error', "houve um erro por favor tente novamente")
        res.redirect('/')
    })
  
})

app.get('/feminino', (req,res) => {
    res.marko(require('./templates/feminino.marko'))
})

app.get('/masculino', (req,res) => {
    res.marko(require('./templates/masculino.marko'))
})

app.get('/infantil', (req,res) => {
    res.marko(require('./templates/infantil.marko'))
})

app.listen(port, '0.0.0.0',() => {
    console.log(`Servidor iniciado na porta ${port}`)
})
