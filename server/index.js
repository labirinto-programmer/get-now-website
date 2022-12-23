/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Import the required libraries
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Make sure to download the required modules
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes/router");
const app = express();
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    This is for mongoose 7
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
mongoose.set('strictQuery', true);
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Make sure to download the required modules
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Make the connection with Database
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const mongoURI = "mongodb://localhost:27017/get-now";
mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`database connected`))
.catch(err => console.log(err));
const port = process.env.PORT || 8000;
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Define the server function that listens to requests
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
app.listen(port, () => {console.log(`the server is ${port}`)});