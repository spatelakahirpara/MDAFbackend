var express= require('express');
var app= express();
var bodyParser = require('body-parser');
const toolRoutes= require('./routes/tools.routes');
const stageRoutes= require('./routes/stage.routes');
const userQuestionsRoutes= require ('./routes/userQuestions.routes');
const swaggerUi= require('swagger-ui-express');
//const swaggerDefination= require('./swagger.json');
const swaggerDefination= require('./cloudSwagger.json')
const pageRouter = require("./routes/login.routes");
const stackRouter = require("./routes/stack.routes");
var logger= require('./config/logger.js');

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if('OPTIONS'==req.method)  {
        res.sendStatus(200);
    }
    else{
        next();
    }
});
app.use(bodyParser.json());
logger.info("loading the main file");

app.use(toolRoutes);
app.use(stageRoutes);
app.use(pageRouter);
app.use(stackRouter);
app.use(userQuestionsRoutes);
app.use('/swagger',swaggerUi.serve, swaggerUi.setup(swaggerDefination));

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



