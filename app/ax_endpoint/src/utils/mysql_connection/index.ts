import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: '0.0.0.0',
    user: 'host',
    password: 'host',
    database: 'ax_endpoint',
    port: 3307,
});

export { connection };
