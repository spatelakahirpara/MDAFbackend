const express= require('express');
const router = express.Router();
const db= require('../models/stage.model');
var logger= require('../config/logger.js');
var HashMap = require('hashmap');
var array = require('array');

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
        db.query("INSERT INTO tblStack (Stack, UserId) VALUES (?,?);",[fulljsondata,data[0].ID],(err,result)=>{
            if(err) throw err;
            logger.info(result);
            res.send({"StatusCode": '200',"data":result}); 
        });
       }
     });
     
});
router.get('/api/getStack',function(req,res,next){
  
  db.query('select * from tblStack ;',(err,data)=>{
    console.log("direct data from database:"+data[2].Stack);
    var obj= data[3].Stack;
    var obj2= JSON.parse(obj);
    console.log("converting data to json object:"+obj2[0].stage);
    res.send(obj);

  });
});
//extra APIs
router.post('/api/access',function(req,res,next){
  console.log("calling"+req.body.UserName);
  temp= '{"Git":'+JSON.stringify(req.body.Git)+'},{"Jenkins":'+JSON.stringify(req.body.Jenkins)+'}';
  db.query('select * from tblLogin where UserName=? ;', [req.body.UserName],(err,data)=>{
    
    if(err) console.log("error");
    
    else if(data === undefined || data.length == 0){
        logger.info("user does not exists");
        res.send({"Status":"404"})
    } 
   else{
    console.log("user"+ data[0].ID)
    db.query("INSERT INTO tblToolAccess  VALUES ('1',?,?);",[temp,data[0].ID],(err,result)=>{
      if(err) throw err;
      logger.info(result);
      res.send({"StatusCode": '200',"data":result}); 
  });
   }
 });

});
router.get('/api/getAccess',function(req,res,next){
  var map = new HashMap(); 
  var param= new array();
  db.query(`      SELECT  tblAccessToolName.ToolName,tblAccessParams.AccessParam 
  FROM tblAccessAutomate 
  join tblAccessToolName 
      ON tblAccessToolName.ID = tblAccessAutomate.AccessToolName
      join tblAccessParams 
          ON tblAccessParams.ID = tblAccessAutomate.AccessParam`,(err,data)=>{
        data.forEach(toolName => { 
          if(map.has(toolName.ToolName)){
            param= map.get(toolName.ToolName);
            param.push(toolName.AccessParam);
            map.set(toolName.ToolName,param);
          }
          else{
            param=[];
            map.set(toolName.ToolName,param);
            param.push(toolName.AccessParam);
          }
      }); 
      map.forEach(function(value, key) {
        console.log(key + " : " + value);
    });
    });
   
    
    res.send(map);
  });

  module.exports= router;