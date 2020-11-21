const AlunoDao = require('../dao/aluno-dao')

let dao = new AlunoDao()

dao.list().then((results) => {
    console.log(results)
}).catch((err) => {
    console.log(err)
})
