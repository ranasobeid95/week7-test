const { Pool } = require('pg');
require('env2') ('./config.env');

if(!process.env.DB_URL ) throw new Error('DB_URL not exists');

const options = {
    connectionString : process.env.DB_URL,
    SSL : true,
};

module.exports = new Pool(options);
