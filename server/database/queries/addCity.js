const dbConnection = require('../config/connection');

const addCity = (data)=>{
    const {name,city} = data ;
    const sql = {
        text : 'INSERT INTO cities (name,city) VALUES ($1, $2) RETURNING * ;',
        values : [name,city],
    };
    return dbConnection.query(sql);
}
module.exports = {
    addCity
};