/* pág 195 */

const mysql = require('mysql2/promise');

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') return global.connection;

    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'mysql',
        database: 'bd_crud_pag168' 
    });

    console.log('Conectou no MySQL!');

    global.connection = connection;

    return global.connection; 
}

connect();
 
async function selectClientes() {
    const conn   = await connect();
    const [rows] = await conn.query('SELECT * FROM tb_clientes;');
    return rows;
}

module.exports = {selectClientes};
