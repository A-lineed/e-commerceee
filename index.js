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

console.log("ola")

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
nomeusu["nomeusu"] = "";

// rota principal
app.get('/', (req, res) => {
    let response = {
        error_messages: req.flash('error'),
        sucess_message: req.flash('success'),
        display: 'block',
        nomeusu: nomeusu["nomeusu"],
        results: []
    }

    dao.listaProduto().then((results) => {
        response.results = results;
        console.log(response);
        res.marko(require(`./templates/home.marko`),response)
    }).catch((err) => {
        console.log(err)
        response.error_messages.push('Ocorreu algum erro no servidor')
        res.marko(require(`./templates/home.marko`), response, err)
    })
    
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
            nomeusu["nomeusu"]=results[0].nome;
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
app.post('/comprar', (req,res)=>{
    res.send({success: true});
})

app.get('/feminino', (req,res) => {
    let response = {
        error_messages: req.flash('error'),
        sucess_message: req.flash('success'),
        display: 'block',
        results: []
    }

    dao.listaFeminino().then((results) => {
        response.results = results;
        res.marko(require(`./templates/feminino.marko`), response)
    }).catch((err) => {
        console.log(err)
        response.error_messages.push('Ocorreu algum erro no servidor')
        res.marko(require(`./templates/feminino.marko`), response, err)
    })
})

app.get('/masculino', (req,res) => {
    let response = {
        error_messages: req.flash('error'),
        sucess_message: req.flash('success'),
        display: 'block',
        results: []
    }

    dao.listaMasculino().then((results) => {
        response.results = results;
        res.marko(require(`./templates/masculino.marko`), response)
    }).catch((err) => {
        console.log(err)
        response.error_messages.push('Ocorreu algum erro no servidor')
        res.marko(require(`./templates/masculino.marko`), response, err)
    })
})

app.get('/infantil', (req,res) => {
    let response = {
        error_messages: req.flash('error'),
        sucess_message: req.flash('success'),
        display: 'block',
        results: []
    }

    dao.listaInfantil().then((results) => {
        response.results = results;
        res.marko(require(`./templates/infantil.marko`), response)
    }).catch((err) => {
        console.log(err)
        response.error_messages.push('Ocorreu algum erro no servidor')
        res.marko(require(`./templates/infantil.marko`), response, err)
    })
})

app.listen(port, '0.0.0.0',() => {
    console.log(`Servidor iniciado na porta ${port}`)
})
