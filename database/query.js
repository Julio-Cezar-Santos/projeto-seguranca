const pool = require('./conexao');

const login = async (usuario, senha) => {
    const result = await pool.query('SELECT * FROM usuarios WHERE nome_usuario = $1 AND senha = $2', [usuario, senha]);
    //                               SELECT * FROM usuarios WHERE nome_usuario = '' OR '1'='1';--' AND senha = ''
    return result;
}

module.exports = { login };










//const result = await pool.query('SELECT * FROM usuarios WHERE nome_usuario = $1 AND senha = $2', [usuario, senha]);