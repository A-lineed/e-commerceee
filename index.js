require('marko/node-require')
// configuração do express e marko
const express = require('express')
const port = 3000
var markoExpress = require("marko/express")
const app = express()
app.use(markoExpress())

//ultilizando aqruivos estaticos
app.use(express.static('public'));
app.use(express.static('files'));
//objeto do banco de dados
const cadastro = require('./dao/aluno-dao')
const dao = new cadastro()
//api paypal
const paypal = require('paypal-rest-sdk');
const paypalconfig = require("./config/paypal.json");
paypal.configure(paypalconfig);

// configuração do bodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// configuração do connect-flash e session
const {responde, response} = require('express')
const session = require('express-session');
const flash = require('connect-flash')
app.use(session({ 
    secret:'geeksforgeeks', 
    saveUninitialized: true, 
    resave: true
}));
app.use(flash()) 

//global var
let nomeusu = Array();
nomeusu["nomeusu"] = "";
let error = [];
let valor;
// rota principal
app.get('/', (req, res) => {
    let response = {
        error_messages: req.flash(error),
        sucess_message: req.flash('success'),
        display: 'block',
        nomeusu: nomeusu["nomeusu"],
        results: []
    }
   

    dao.listaProduto().then((results) => {
        response.results = results;
       // console.log(response);
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
    let response = {
        error_messages: req.flash('error'),
        success_messages: req.flash('success'),
        results:[]
    };
 
    res.marko(require('./templates/cadastro.marko'), response)
})

app.post('/save' , (req,res)=>{

    console.log(req.body);
    dao.checkout(req.body).then((results)=>{
        console.log(results[0]);
    if(!results[0] ||req.body.email != results[0].email){

        dao.save(req.body).then((results)=>{
            req.flash('success', 'cadastro feito com sucesso');
            res.redirect('/');
        }).catch(err =>{
             console.log(err);
             req.flash('error', "houve um erro por favor tente novamente")
             res.redirect('/')
             })
        
    }else{
             req.flash('error', "esse email já existe")
             res.redirect('/cadastro');
    }
    })
})
app.post('/comprar', (req,res)=>{
    console.log(req.body);
    let response = {
        error_messages: req.flash('error'),
        success_messages: req.flash('success'),
        display:'block',
        results:[]
    };
   
    dao.Comprar(req.body).then((results)=>{
        response.results = results;
        console.log(response.results[0].id);
        
        const product = response.results[0]//.reduce((all,item)=> item === product ? product : all);
        //if(!product.id) return res.marko(require(`./templates/home.marko`),response)
        console.log(product.preco.toFixed(2));
        valor = product.preco.toFixed(2);

        const create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:3000/success",
                "cancel_url": "http://localhost:3000/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": product.nome,
                        "sku": product.id,
                        "price": product.preco.toFixed(2),
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": product.preco.toFixed(2)
                },
                "description": product.nome
            }]
        };
        
        paypal.payment.create(create_payment_json, function (error, payment) {
          if (error) {
              throw error;
          } else {
              for(let i = 0;i < payment.links.length;i++){
                if(payment.links[i].rel === 'approval_url'){
                 
                  res.redirect(payment.links[i].href);
                }
              }
          }
        });
        
        }).catch(err =>{
            console.log(err);
            req.flash('error', "houve um erro por favor tente novamente")
            res.redirect('/')
        })

   
    })

app.get('/success', (req,res)=>{
    console.log("sucesso",valor);
    const payerId = req.query.PayerID;
    console.log(payerId);
    const paymentId =  req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions":[{
            "amount": {
                "currency": "USD",
                "total": valor
            }

        }]
    }

    paypal.payment.execute(paymentId, execute_payment_json, (err, payment)=>{
        if(err){
            console.log(err.response);
            throw err;
        }else{
            console.log(JSON.stringify(payment))
            res.marko(require(`./templates/success`));
        }

    });

});
app.get('/cancel', (req,res)=>{
    res.redirect('/')
})

app.get('/feminino', (req,res) => {
    let response = {
        error_messages: req.flash('error'),
        sucess_message: req.flash('success'),
        display: 'block',
        nomeusu: nomeusu["nomeusu"],
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
        nomeusu: nomeusu["nomeusu"],
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
        nomeusu: nomeusu["nomeusu"],
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
