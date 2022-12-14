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
const Data = require("../models/data");
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
        });
        await newUser.save();
        res.send(newUser);
    } catch(err) {
        res.status.Code = 400;
        res.send(err.message);
    }
});

routes.post("/data", async (req, res) => { 
    const {id, 
        foodName, 
        description, 
        imagePath, 
        popularity, 
        voteAverage, 
        releaseDate,
        kind,
        flavor,
        category,
        price,
        customerOpinion} = req.body;
    try {
        const newData = new Data({
            id,
            foodName, 
            description,
            imagePath,
            popularity,
            voteAverage,
            releaseDate,
            kind,
            flavor,
            category,
            price,
            customerOpinion,
        });
        await newData.save();
        res.send(newData);
    } catch(err) {
        res.status.Code = 400;
        res.send(err.message);
    }
});
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    Show all data
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/ 
routes.get("/alldata" , (req, res) => { 
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
    Data.find({})
    .then(result => res.json(result))
    .catch(err => res.json({
        errMsg: err
    }));
});

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