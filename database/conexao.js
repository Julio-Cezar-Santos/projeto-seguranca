const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'meu_banco_de_dados',
    password: 'postgres',
    port: 5432,
});

module.exports = pool;