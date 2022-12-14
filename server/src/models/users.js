/*===========================================
    In this file, set up my user module
===========================================*/ 
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Import the mongoose library
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const {Schema, model} = require("mongoose");
const shortid = require('shortid');
const hashPassword = require('../../helper');
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Start defining your user schema
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    favorite: [
            {
                foodName: String,
                description: String,
                imagePath: String,
                price: String
            }
        ]
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Create  the user model
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const User = model("User", userSchema);
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Storing the password after making the hash
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
userSchema.pre('save', function(next) { 
    if (!this.salt) {
        this.salt = shortid.generate();
    }
    if (this.password) {
        this.password = hashPassword(this.password, this.salt);
    }
    next();
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Export the module
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
module.exports = User;