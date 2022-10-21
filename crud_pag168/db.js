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
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM tbclientes;');
    return rows;
};


/* pág 204 */
async function insertCliente(cliente) {
    const conn   = await connect();
    const sql    = "INSERT INTO tbclientes(nome,idade,uf) VALUES (?,?,?);";
    const values = [cliente.nome,cliente.idade,cliente.uf];
    return await conn.query(sql, values);
 };



/* pág 207 */
async function selectCliente(id) {
    const conn = await connect();
    const sql = "SELECT * FROM tbclientes WHERE id=?";
    const [rows] = await conn.query(sql, [id]);
    return rows && rows.length > 0 ? rows[0] : {};
}


/*pág 213 */
async function updateCliente(id, cliente){
    const conn = await connect();
    const sql = "UPDATE tbclientes SET nome=?,idade=?,uf=? WHERE id=?";
    const values = [cliente.nome,cliente.idade,cliente.uf,id];
    return await conn.query(sql, values);
}


async function deleteCliente(id) {
    const conn = await connect(); 
    return await conn.query('DELETE FROM tbclientes WHERE id=?;', [id]);
}


module.exports = { 
    selectClientes, selectCliente, insertCliente, updateCliente, deleteCliente
}