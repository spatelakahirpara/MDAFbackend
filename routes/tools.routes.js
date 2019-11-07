
const express= require('express');
const router= express.Router();
const db= require('../models/stage.model');


router.get('/api/Plan/task',function(req,res,next){
  let sql=`SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "task"`;
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending plan- task managenment data");
    
    res.send(data); 
}); 
 
});
router.get('/api/Plan/bdd',function(req,res,next){
  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
    FROM ( tblStage as t join tblSubSection as s join tblTools as u 
    on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "bdd"`;
  // let sql= 'SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools FROM ( `tblStage` as t join `tblSubSection` as s join `tblTools` as u on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.SubSection= "BDD"';
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending plan- BDD data");
    
    res.send(data); 
}); 
 
});
//----------------------------------create-------------------------------------------
router.get('/api/Create/repository',function(req,res,next){

  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "repository"`;
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending create- repository data");
    
    res.send(data); 
}); 
});
router.get('/api/Create/build',function(req,res,next){

  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "build"`;
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending create- build data");
    
    res.send(data); 
}); 
});
router.get('/api/Create/ide',function(req,res,next){

  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "ide"`;
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending create- ide data");
    
    res.send(data); 
}); 
});
//----------------------------------verify-------------------------------------------
router.get('/api/Verify/automation',function(req,res,next){
  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "automation"`;
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending verify - automation data");
    
    res.send(data); 
}); 
});
router.get('/api/Verify/security',function(req,res,next){
  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "security"`;
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending verify - tblSecurity data");
    
    res.send(data); 
}); 
});
router.get('/api/Verify/management',function(req,res,next){
  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "management"`;
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending verify - management data");
    
    res.send(data); 
}); 
});
router.get('/api/Verify/quality',function(req,res,next){
  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "quality"`;
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending verify - code_quality data");
    
    res.send(data); 
}); 
});
router.get('/api/Verify/verification',function(req,res,next){
  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "verification"`;
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending verify - verification data");
    
    res.send(data); 
}); 
});

//----------------------------------release-------------------------------------------
router.get('/api/Release/deploy',function(req,res,next){
  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "deploy"`;
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending release - deploy data");
    
    res.send(data); 
}); 
});

//----------------------------------configure-------------------------------------------
router.get('/api/Configure/automation',function(req,res,next){ 
  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "automation"`;
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending release - automation data");
    
    res.send(data); 
}); 
});
//----------------------------------containers-------------------------------------------
router.get('/api/Containers/getContainers',function(req,res,next){
  
  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "getContainers"`;
  db.query(sql,(err,data)=>{
    if(err) throw err;
    console.log("sending release - get_containers data");
    
    res.send(data); 
}); 
});
//----------------------------------monitor-------------------------------------------
router.get('/api/Monitor/analytics',function(req,res,next){
  let sql= `SELECT t.Stage as stage, s.SubSection as subsection, u.Tool as tools 
  FROM ( tblStage as t join tblSubSection as s join tblTools as u 
  on (t.ID = s.ToolId  and s.ID = u.SubCategoryId)) where s.Route= "analytics"`;
  db.query(sql,(err,data)=>{
        
    if(err) throw err;
    console.log("sending release - analytics data");
    
    res.send(data); 
}); 
});


// var x;
// module.exports=function(app){
//     x=app;
//     var data = require('../controllers/toolchain.controller');

//   // todoList Routes
//   app.route('/tasks')
//     .get(data.getData);
    
// }


module.exports= router;  