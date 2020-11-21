const AlunoDao = require('../dao/aluno-dao')

let dao = new AlunoDao()

console.log(' -------------- ')
dao.delete(1)
console.log(dao.list())

console.log(' -------------- ')
let aluno = dao.findById(3)
console.log(aluno)

let novoAluno = { id: 4, nome: 'Joana', curso: 'Qualidade'}
dao.save(novoAluno)

console.log(' --------------- ')
console.log(dao.list())
