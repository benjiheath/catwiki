const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = pool;

// psql --host=ec2-44-194-145-230.compute-1.amazonaws.com --port=5432 --username=nzvocrymtrnnlt --password --dbname=d76h217n6aji8k

