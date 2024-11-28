const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mi_base_de_datos_usuarios',
    password: 'admin',
    port: 5432
});

const conectarBDPostgres = async () => {
    try {
        await pool.connect();
        console.log('Conexión exitosa a PostgreSQL');
    } catch (error) {
        console.error('Error al conectar a PostgreSQL:', error.message);
    }
};

module.exports = { conectarBDPostgres, pool };
