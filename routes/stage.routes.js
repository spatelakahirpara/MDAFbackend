const express = require("express");
const router = express.Router();
const db = require("../models/stage.model");

router.get("/api/toolchain", function(req, res, next) {
  let sql = `SELECT stage from tblStage`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.log("sending all stages");

    res.send(data);
  });
});
router.get("/api/Plan", function(req, res, next) {
  let sql = `SELECT t.Stage as stage, s.Route as route, s.Route as route, s.SubSection as subsection
  FROM ( tblStage as t join tblSubSection as s  
  on (t.ID = s.ToolId)) where t.Stage= "Plan"`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.log("sending plan");

    res.send(data);
  });
});
router.get("/api/Create", function(req, res, next) {
  let sql = `SELECT t.Stage as stage, s.Route as route, s.SubSection as subsection
  FROM ( tblStage as t join tblSubSection as s  
  on (t.ID = s.ToolId)) where t.Stage= "Create"`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.log("sending create");

    res.send(data);
  });
});
router.get("/api/Verify", function(req, res, next) {
  let sql = `SELECT t.Stage as stage, s.Route as route, s.SubSection as subsection
  FROM ( tblStage as t join tblSubSection as s  
  on (t.ID = s.ToolId)) where t.Stage= "Verify"`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.log("sending verify");

    res.send(data);
  });
});
// router.get('/api/release',function(req,res,next){
//   let sql=`SELECT t.Stage as stage, s.Route as route, s.SubSection as subsection
//   FROM ( tblStage as t join tblSubSection as s
//   on (t.ID = s.ToolId)) where t.Stage= "Preproduction"`;
//   db.query(sql,(err,data)=>{
//     if(err) throw err;
//     console.log("sending plan- task managenment data");

//     res.send(data);
// });
// });
router.get("/api/Release", function(req, res, next) {
  let sql = `SELECT t.Stage as stage, s.Route as route, s.SubSection as subsection
  FROM ( tblStage as t join tblSubSection as s  
  on (t.ID = s.ToolId)) where t.Stage= "Release"`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.log("sending release");

    res.send(data);
  });
});
router.get("/api/Configure", function(req, res, next) {
  let sql = `SELECT t.Stage as stage, s.Route as route, s.SubSection as subsection
  FROM ( tblStage as t join tblSubSection as s  
  on (t.ID = s.ToolId)) where t.Stage= "Configure"`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.log("sending configure");

    res.send(data);
  });
});
router.get("/api/Containers", function(req, res, next) {
  let sql = `SELECT t.Stage as stage, s.Route as route, s.SubSection as subsection
  FROM ( tblStage as t join tblSubSection as s  
  on (t.ID = s.ToolId)) where t.Stage= "Containers"`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.log("sending containers");

    res.send(data);
  });
});
router.get("/api/Monitor", function(req, res, next) {
  let sql = `SELECT t.Stage as stage, s.Route as route, s.SubSection as subsection
  FROM ( tblStage as t join tblSubSection as s  
  on (t.ID = s.ToolId)) where t.Stage= "Monitor"`;
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.log("sending Monitor");

    res.send(data);
  });
});
module.exports = router;
