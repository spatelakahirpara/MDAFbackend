const express= require('express');
const router = express.Router();
//const bcrypt= require('bcrypt');
const saltRounds = 10;
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
            console.log("email does not exists");
            res.send({"Status":"404"})
        }
        else{
            var hash= data[0].Password;
            var plainPassword = req.body.Password;
            if (data.length==0){
                res.send("Invalid credentials. Try Again");
            }
            else{
                
               // bcrypt.compare(plainPassword,hash, function (err, result) {
                
                    if (hash == plainPassword) {
                        
                        res.send({"body": data[0],
                        "StatusCode": '200'},
                        );
                        console.log("logged in as:"+data[0].UserName);

                    }
                    else {
                        res.send({"Status":"404"});
                    }
                //}); 
             }
         }
     });
});
  router.post('/api/register',function(req,res,next){
   
     //encryption
    //  bcrypt.hash(req.body.Password, saltRounds,function(err,hash){
        console.log(req.body.Id, req.body.UserName,req.body.Password);
        db.query('INSERT INTO tblLogin (Id, UserName,Password,Stack) VALUES (?,?,?,?);',[req.body.Id, req.body.UserName,req.body.Password, req.body.Stack],(err,data)=>{
            if(err) throw err;
            console.log(data);
            res.send(data);  
        });
    //});
  }); 
  module.exports= router;

  //home page
  