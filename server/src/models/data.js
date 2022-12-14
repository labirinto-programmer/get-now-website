/*===========================================
    In this file, set up my user module
===========================================*/ 
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Import the mongoose library
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const {Schema, model} = require("mongoose");
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Start defining your user schema
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const dataSchema = new Schema({
    id: Number,
    foodName: String,
    description: String,
    imagePath: String,
    popularity: Number,
    voteAverage: Number,
    releaseDate: String,
    kind: Array,
    flavor: Array,
    category: String,
    price: String,
    customerOpinion: Array,
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Create  the user model
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const Data = model("Data", dataSchema);
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Export the module
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
module.exports = Data;