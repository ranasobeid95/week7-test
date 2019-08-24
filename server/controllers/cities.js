const { getCities } = require('../database/queries/getCities');
const { addCity }= require('../database/queries/addCity');

exports.getData = (req,res)=>{
    getCities()
        .then(result => res.json(result.rows))
        .catch(error => console.log(error.stack));
};

exports.postData = (req, res )=>{
    addCity(req.body)
        .then(() => res.redirect('/'))
        .catch(error => console.log(error.stack));
};