/*===========================================
    In this file, set up my application routes
===========================================*/ 
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Import the mongoose library
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const Jwt = require("jsonwebtoken");
const Joi = require("joi");
const hashPassword = require('../../helper');
const routes = require("express").Router();
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Import the Post module
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
const User = require("../models/users");
const Food = require("../models/food");
const Favorite = require("../models/favorite");
const Cart = require("../models/cart");
const Coment = require("../models/coment");
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    For security keyword
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
const dotenv = require("dotenv"); 
dotenv.config();
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Path is to be sure that the page is working
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
routes.get('/',(req, res) => { 
    res.send("Hello Everyone!");
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    New user sign up
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
routes.post("/users", async (req, res) => { 
    const {name, email, password} = req.body;
    const bodySchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    });
    const validaton = bodySchema.validate(req.body);
    if (validaton.error) {
        res.sendStatus = 400;
        res.send(validaton.error.details[0].message);
        return;
    }
    try {
        const newUser = new User({
            name,
            email, 
            password: hashPassword(password),
            favorite: User._id, 
            coment: User._id, 
            cart: User._id
        });
        await newUser.save();
        res.send(newUser);
    } catch(err) {
        res.status.Code = 400;
        res.send(err.message);
    }
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Show all food dosen't need to (authorization)
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
routes.get("/food" , async (req, res) => { 
    try {
        const showFood = await Food.find({});
        res.send(showFood);
    } catch(err) {
        res.status(500).json({
            Error: error
        });
    };
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Show all favorite
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
routes.get("/favorite" , (req, res) => { 
    const token = req.headers.authorization;
    if(!token) {
        res.statusCode = 401;
        res.send("You have no permissions");
        return;
    }
    const decodedToken = Jwt.decode(token);
    console.log(decodedToken);
    const userSing = User.findById(decodedToken.sub);
    if(!userSing) {
        res.statusCode = 401;
        res.send("You have no permissions");
        return;
    }
    Jwt.verify(token, process.env.SECRET);
    Favorite.find({})
    .then(result => res.json(result))
    .catch(err => res.json({
        errMsg: err
    }));
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Add a new favorite
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
routes.post("/addfavorite", async (req, res) => { 
    const {
        foodName, 
        quantity, 
        imagePath,
        price} = req.body;
    try {
        const newFavorite = new Favorite({
            foodName, 
            quantity,
            imagePath,
            price,
            user: User._id
        });
        await newFavorite.save();
        res.send(newFavorite);
    } catch(err) {
        res.status.Code = 400;
        res.send(err.message);
    }
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Add a new cart
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
routes.post("/addcart", async (req, res) => { 
    const {
        foodName, 
        quantity, 
        imagePath,
        price} = req.body;
    try {
        const newCart = new Cart({
            foodName, 
            quantity,
            imagePath,
            price,
            user: User._id
        });
        await newCart.save();
        res.send(newCart);
    } catch(err) {
        res.status.Code = 400;
        res.send(err.message);
    }
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Add a new coment
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
routes.post("/addcoment", async (req, res) => { 
    const {
        foodName, 
        quantity, 
        imagePath,
        price} = req.body;
    try {
        const newComent = new Coment({
            foodName, 
            quantity,
            imagePath,
            price,
            user: User._id
        });
        await newComent.save();
        res.send(newComent);
    } catch(err) {
        res.status.Code = 400;
        res.send(err.message);
    }
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    User sign in
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
routes.post("/sing", async (req, res) => { 
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) {
        res.statusCode = 401;
        res.send("No User Found");
    } else {
        if(user.password === hashPassword(password, user.salt)) {
            const token = Jwt.sign({sub: user._id}, process.env.SECRET, {expiresIn: 30});
            res.send(token);
        } else {
            res.statusCode = 401;
            res.send(`Password is wrong`);
        }
    }
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Export the routes
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
module.exports = routes;