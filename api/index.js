const express = require("express");
const app = express();
const userUpload = require("./routes/Routes");

app.use("/user", userUpload)

app.listen(3001, () => { 
    console.log("Server is running!")
})