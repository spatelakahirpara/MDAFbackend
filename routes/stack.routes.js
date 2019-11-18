const express= require('express');
const router = express.Router();
const db= require('../models/stage.model');
var insertStack=[{"Stage":"Plan", "SubSection":"task", "Tools":"Taiga"},{"Stage":"Plan", "SubSection":"bdd", "Tools":"Behat"}];
const b= require('bcryptjs');
var logger= require('../config/logger.js');

        var json= JSON.stringify(insertStack);

  router.post('/api/review',function(req,res,next){
   
     //put array of json objects into database
     //get the UserName from session
     db.query('select * from tblLogin where UserName=? ;', [req.body.UserName],(err,data)=>{
        if(err) throw logger.info(err);
        
        else if(data === undefined || data.length == 0){
            logger.info("user does not exists");
            res.send({"Status":"404"})
        }
       else{
        logger.info(data[0]);
        logger.info("id"+data[0].ID);
        db.query(`INSERT INTO tblUserStack  VALUES(5,'{"Stack":?}',?);
     `,[json,data[0].ID],(err,result)=>{
            if(err) throw err;
            logger.info(result);
            res.send(result);  
        });
       }
     });
});
        
   
  module.exports= router;


  