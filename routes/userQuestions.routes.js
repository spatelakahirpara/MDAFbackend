
const express= require('express');
const router= express.Router();
const db= require('../models/stage.model');
var logger= require('../config/logger.js');
const util= require('util');
var exec = util.promisify(require('child_process').exec);
var outputString;

 router.get('/api/buildPLB', async function(req,res){
 
      const {stdout,stderr} = await exec("~/Desktop/second.sh");
       outputString=stdout.toString(); 
      console.log("output from the script: "+outputString);
      
      const lines = outputString.split(/\r?\n/);
      lines.forEach((line) => {
        if(line.search( "FINAL_URL" )!=-1){
          var length= "FINAL_URL".length;
          var url=line.slice(length+1);
          console.log("1:"+url);
          res.send({output:url});
        }
      });
});

router.get('/api/questions',function(req,res){
    let sql= `select * from tblSelectQuestion;`;
    db.query(sql,(err,data)=>{
          
      if(err) throw err;
      logger.info("sending Question data");
      res.send(data); 
  }); 
   
  });
  router.get('/api/tools',function(req,res){
    let sql= ` SELECT  t.ToolName, s.Question from tblSelectTool t
    join tblSelectQuestion s 
        ON s.ID= t.QuestionID;`;
    db.query(sql,(err,data)=>{
          
      if(err) throw err;
      logger.info("sending Question data");
      res.send(data); 
  }); 
   
  });
  router.get('/api/params',function(req,res){
    let sql= ` SELECT  s.Question, t.ToolName, p.ParamName
    from tblSelectTool t
    join tblSelectQuestion s on s.ID=t.QuestionID
      join tblQuestionAutomate q on q.ToolId=t.ID 
      join tblSelectParams p on p.Id=q.ParamID;`;
    db.query(sql,(err,data)=>{
          
      if(err) throw err;
      logger.info("sending Question data");
      res.send(data); 
  }); 
   
  });
  router.post('/api/tool',function(req,res){
    console.log("id:"+req.body.questionId);
    db.query(` SELECT  t.ID as ToolId,t.ToolName as ToolName from tblSelectTool t
    join tblSelectQuestion s
        ON s.ID= t.QuestionID
        where s.ID=?`,[req.body.questionId],(err,data)=>{
         
      if(err) throw err;
      logger.info("sending Question data");
      res.send(data); 
  }); 
   
  });
  //bonus example
  router.get('/api/storeParams',function(req,res){
    let sql= ` INSERT INTO tblUserQuestion(UserID, QuestionAutomationID, ParamValue) VALUES
    (1,1,'miracle');`;
    db.query(sql,(err,data)=>{
      if(err) throw err;
      logger.info("inserting param data");
      res.send(data); 
    }); 
    
  });


module.exports= router;   
