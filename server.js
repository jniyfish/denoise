let express = require("express");
let app = express();

app.use(function(req,res,next){
    console.log(`${new Date()} -{req.method} request for ${req.url}`);
    next();
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Server listening on port ${port}!`);
});


app.listen(81, function()
{
    console.log("Serving static on 81");
});