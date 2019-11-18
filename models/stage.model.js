var mysql= require('mysql');
var util= require('util');
var logger= require('../config/logger.js');
const db= mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Sp-230595',
    database: 'DevOpsToolChain'
});
db.connect((err)=>{
    if(err){throw err;}
    console.log('connected to the database');
    logger.info('connected to the database');
});
db.query= util.promisify(db.query);
module.exports = db;  