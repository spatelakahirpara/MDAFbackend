var mysql= require('mysql');

const db= mysql.createConnection({
    host:'mysqlaws.cox6b9l83zga.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    database: 'DevOpsToolChain'
});
db.connect((err)=>{
    if(err){throw err;}
    console.log('connected to the database');
});
module.exports = db;  
