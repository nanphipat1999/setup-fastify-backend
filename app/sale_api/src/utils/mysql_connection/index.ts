import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: '0.0.0.0',
    user: 'host',
    password: 'host',
    database: 'booking',
    port: 3306,
});

export { connection };
