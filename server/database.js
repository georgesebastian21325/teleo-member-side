const { Pool } = require('pg');

const pool = new Pool({
    user:"postgres",
    password: "Marley:2023.",
    host: 'localhost',
    port: 5432,
    database: "teleo_member_system"
})

module.exports = pool;