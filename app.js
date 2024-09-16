const express = require("express");
const app =express();
const mongoose = require("mongoose");
// const ConnectDb = require("./config/DbConnection");
const countryRoute = require("./routes/countryRoutes")

app.use(express.json());
app.use('/', countryRoute);

// ConnectDb();

//creating server......
const port=5000;
app.listen(port,()=>{
    console.log(`server is listing on the port ${port}`)
})
