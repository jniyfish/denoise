let express = require("express");
let app = express();

app.use(function(req,res,next){
    console.log(`${new Date()} -{req.method} request for ${req.url}`);
    next();
});

app.use(express.static("static"));

app.listen(process.env.PORT || 3000, function(){
     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
   }); 
