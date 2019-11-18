const express= require('express');
const router = express.Router();
//const bcrypt= require('bcrypt');
const bcrypt= require('bcryptjs');
const saltRounds = 10;
var logger= require('../config/logger.js');
const db= require('../models/stage.model');
router.get('/',function(req,res,next){
    res.send("sent");
  }); 

  //get home
  router.get('/home',function(req,res,next){
    res.send("home");
  }); 

  //post login data
  router.post('/api/login',async (req,res)=>{
      
    db.query('select * from tblLogin where UserName=? ;', [req.body.UserName],(err,data)=>{
      
        if(err) throw logger.info(err);
        else if(data === undefined || data.length == 0){
            logger.info("email does not exists");
            res.send({"Status":"404"})
        }
        else{
       

            var hash= data[0].Password;
            var plainPassword = req.body.Password;
            if (data.length==0){
                res.send("Invalid credentials. Try Again");
            }
            else{
                
               bcrypt.compare(plainPassword,hash, function (err, result) {
                
                    if (result === true) {
                        logger.info("matched:");
                        res.send({"body": data[0],
                        "StatusCode": '200'},
                        );
                        logger.info("logged in as:"+data[0].UserName);

                    }
                    else {
                        res.send({"Status":"404"});
                    }
                }); 
             }
         }
     });
});
  router.post('/api/register',function(req,res,next){
   
     //encryption
     
      bcrypt.hash(req.body.Password, saltRounds,function(err,hash){
        logger.info(req.body.UserName,req.body.Password);
        db.query('INSERT INTO tblLogin (UserName,Password) VALUES (?,?);',[req.body.UserName,hash],(err,data)=>{
            if(err) throw err;
            logger.info(data);
            res.send({"body": data[0],
                        "StatusCode": '200'},
                        );
            
        });
    });
  }); 
  module.exports= router;


  