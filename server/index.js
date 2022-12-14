/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Import the required libraries
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Make sure to download the required modules
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const app = require("./app");
const mongoose = require("mongoose");
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    This is for mongoose 7
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
mongoose.set('strictQuery', false);
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Make the connection with Database
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const mongoURI = "mongodb://localhost:27017/get-now";
mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log(`database connected`);
    const port = app.get("port");
    app.listen(port, () => {console.log(`the server is ${port}`)});
})
.catch(err => console.log(err));