const express= require('express');
const router = express.Router();
const db= require('../models/stage.model');
//var insertStack=
        

  router.post('/api/review',function(req,res,next){
   
     //put array of json objects into database
     //get the UserName from session
     db.query('select * from tblLogin where UserName=? ;', [req.body.UserName],(err,data)=>{
        if(err) throw logger.info(err);
        else if(data === undefined || data.length == 0){
            console.log("user does not exists");
            res.send({"Status":"404"})
        }
       else{
        db.query(`UPDATE tblLogin SET Stack = '{"Stack": 
        [{"Stage":"Plan", "SubSection":"task", "Tools":"Taiga"},
        {"Stage":"Plan", "SubSection":"bdd", "Tools":"Behat"}]}' 
        WHERE UserName = ?;`,[data[0].UserName],(err,result)=>{
            if(err) throw err;
            console.log(result);
            res.send(result);  
        });
       }
     });
});
        
   
  module.exports= router;

  //home page
  