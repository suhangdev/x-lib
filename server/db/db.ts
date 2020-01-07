const mysql = require('mysql')
const conf = require('./dbConf')

const pool = mysql.createPool(conf)

const queryDB = async (sql: string, params: any) => (
    new Promise((resolve, reject) => {
        pool.getConnection((err: Error, connection: any) => {
            if (err) {
                reject(err)
            }
            connection.query(sql, params, (err: Error, result: any) => {
                connection.release()
                if (err) {
                    reject(err)
                }
                if (result.insertId) {
                    result.id = result.insertId
                    resolve(result)
                }
            })
        })
    })
)

module.exports = queryDB