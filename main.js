var express= require('express');
var app= express();
var bodyParser = require('body-parser');
const toolRoutes= require('./routes/tools.routes');
const stageRoutes= require('./routes/stage.routes');

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if('OPTIONS'==req.method)  {
        res.sendStatus(200);
    }
    else{
        console.log("request Recived");
        next();
    }
});
app.use(bodyParser.json());


app.use(toolRoutes);
app.use(stageRoutes);

app.listen(3000);
process.on("unhandledRejection", (reason, p) => {
    console.log(reason + " ************** Unhandled Rejection at Promise ****************** ");
    console.log(p);
})
.on("uncaughtException", err => {
    console.log("Uncaught Exception thrown");
    console.log(err);
    process.exit(1);
});



