const mysql = require('mysql2')

class AlunoDao {
    constructor() {
        this._connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '85850219',
            database: 'crud_node'
        })
    }

    list() {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT * FROM alunos',
                function(err, results) {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    save(aluno) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'INSERT INTO alunos (nome, email, curso) VALUES (?, ?, ?)', [aluno.nome, aluno.email, aluno.curso],
                function(err, results) {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    update(aluno) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'UPDATE alunos SET nome=?, email=?, curso=? WHERE id=?', [aluno.nome, aluno.email, aluno.curso, aluno.id],
                function(err, results) {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    findById(id) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT * FROM alunos WHERE id=?',[id],
                function(err, results) {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'DELETE FROM alunos WHERE id=?',[id],
                function(err, results) {
                    if(err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }
}

module.exports = AlunoDao
