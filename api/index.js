const express = require("express");
const app = express();
const userUpload = require("./routes/Routes");

app.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With,Content-Type, Authorization, Accept"
    );

    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE"
    );
  
    next();
});

app.use("/user", userUpload)

app.listen(3001, () => { 
    console.log("Server is running!")
})