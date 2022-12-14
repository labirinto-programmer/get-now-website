/*===========================================
    Fill for hash the passwords
===========================================*/ 
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Import the crypto library
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const crypto = require('crypto');
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Function for hashing the password of a user
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const hashPassword = (password, salt = 'secret') =>{
    return crypto.createHmac('sha256', salt).update(password).digest('hex');
}
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Export the function
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
module.exports = hashPassword;