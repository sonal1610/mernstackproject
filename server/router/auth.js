const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");
const cookieParser =require("cookie-parser");

router.use(cookieParser())

require('../db/conn');
const User = require("../model/users");

router.get('/', (req, res) => {
    res.send('Hello World from router');
});

//Register

router.post('/register', async (req, res) => {

    const { name, email, phone, password, cpassword } = req.body;

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "please filled all fields " });
    }

    try {

        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "User Already Exist" });
        }
        if (password != cpassword) {
            return res.status(422).json({ error: "Password not matched" });
        } else {

            const user = new User({ name, email, phone, password, cpassword })

            await user.save();

            res.status(201).json({ message: "Registration Successfull" });
        }

    } catch (err) {
        console.log(err);
    }

});

//login

router.post('/signin', async (req, res) => {

    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: "Please fill the details" })
        }

        const userLogin = await User.findOne({ email: email });
      

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
        
            token = await  userLogin.generateAuthToken();
            

            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });

            if (!isMatch) {
                res.status(400).json({ error: "invalid Credientials" })
            } else {
                res.status(200).json({ message: "User Login Successfully" })
            }
        } else {
            res.status(400).json({ error: "invalid Credientials" })
        }

    } catch (err) {
        console.log(err);
    }
});

router.get('/about', authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', {path:'/'})
    res.status(200).send('User Logout');
});

module.exports = router;