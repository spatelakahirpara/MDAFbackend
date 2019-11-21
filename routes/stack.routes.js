const express= require('express');
const router = express.Router();
const db= require('../models/stage.model');
var insertStack='{"Stack":[{"Stage":"Plan", "SubSection":"task", "Tools":"Taiga"}]}';
var logger= require('../config/logger.js');

  router.post('/api/review',function(req,res,next){
    
    var fulljsondata=JSON.stringify(req.body.Stack);
    
     db.query('select * from tblLogin where UserName=? ;', [req.body.UserName],(err,data)=>{
        if(err) throw logger.info(err);
        
        else if(data === undefined || data.length == 0){
            logger.info("user does not exists");
            res.send({"Status":"404"})
        } 
       else{
        logger.info(data[0]);
        db.query("INSERT INTO tblUserStac (Stack, UserId) VALUES (?,?);",[fulljsondata,data[0].ID],(err,result)=>{
            if(err) throw err;
            logger.info(result);
            res.send({"StatusCode": '200'}); 
        });
       }
     });
     
});
router.get('/api/json',function(req,res,next){
  db.query('select * from tblUserStac ;',(err,data)=>{
    console.log("direct data from database:"+data[3].Stack);
    var obj= data[3].Stack;
    var obj2= JSON.parse(obj);
    console.log("converting data to json object:"+obj2[0].stage);
    res.send(obj);

  });
});
router.post('/api/access',function(req,res,next){
  console.log("api called");
  res.send({"StatusCode": '200'}); 

});
   
  module.exports= router;


  