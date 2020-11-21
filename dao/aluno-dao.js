const mysql = require('mysql2')

class AlunoDao {
    constructor() {
       /* this._connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '85322487-+Jj',
            database: 'crud_node'
        })*/
    }

    into() {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT email,senha,nome FROM usuario',
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

    save(usuario) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'INSERT INTO usuario (nome, email, senha, numero, cep, logradouro, bairro, localidade, uf ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
                [usuario.nome, usuario.email, usuario. senha, usuario.numero,usuario.cep, usuario.logradouro, usuario.bairro, usuario.localidade, usuario.uf],
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

    update(usuario) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'UPDATE alunos SET nome=?, email=?,  WHERE id=?', 
                [usuario.nome, usuario.email, usuario. senha, usuario.numero,usuario.cep, usuario.logradouro, usuario.bairro, usuario.localidade, usuario.uf],
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
                'DELETE FROM usuario WHERE id=?',[id],
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
