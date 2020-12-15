const mysql = require('mysql2')

class AlunoDao {
    constructor() {
        this._connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '85850219',
            database: 'ecommerce' 
        })
    }

    listaProduto() {
        return new Promise((resolve, reject) => {
            this._connection.query(
                'SELECT * FROM produtos',
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

    listaFeminino() {
        return new Promise((resolve, reject) => {
            this._connection.query(
                `SELECT * FROM produtos WHERE categoria = 'feminino';`,
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

    listaMasculino() {
        return new Promise((resolve, reject) => {
            this._connection.query(
                `SELECT * FROM produtos WHERE categoria = 'masculino';`,
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

    listaInfantil() {
        return new Promise((resolve, reject) => {
            this._connection.query(
                `SELECT * FROM produtos WHERE categoria = 'infantil';`,
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

    into(usu) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                `SELECT email,senha,nome FROM usuarios where email=? AND senha=?`,[usu.email, usu.senha],
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
        if(usuario.email){

        }
        return new Promise((resolve, reject) => {
            this._connection.query(
                'INSERT INTO usuarios (nome, email, senha, numero, cep, logradouro, bairro, localidade, uf ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
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

    Comprar(id) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                `SELECT * FROM produtos WHERE id=? OR nome=?`, [id.id, id.nome],
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

    

    checkout(usu) {
        return new Promise((resolve, reject) => {
            this._connection.query(
                `SELECT email FROM usuarios where email=?`,[usu.email],
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
