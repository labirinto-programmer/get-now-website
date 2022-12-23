/*===========================================
    In this file, set up my cart module
===========================================*/ 
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Import the mongoose library
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const {Schema, model} = require("mongoose");
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Start defining your cart schema
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const cartSchema = new Schema({
    foodName: String,
    quantity: Array,
    imagePath: String,
    price: String,
    user: {type: Schema.Types.ObjectId, ref: "User"}
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Create  the coment model
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const Cart = model("Cart", cartSchema);
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Export the module
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
module.exports = Cart;