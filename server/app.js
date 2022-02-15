const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const  app = express();
const cookieparser=require("cookie-parser");


dotenv.config({ path:  './config.env'});

//database connection
require('./db/conn');

//json
app.use(express.json());

//router
app.use(require('./router/auth'))
app.use(cookieparser());

const User = require('./model/users');


const PORT = process.env.PORT;

//middleware







// app.get('/about', middleware, (req, res) => {
//     res.send('About Page');
// });

app.get('/service', (req, res) => {
    res.send('Service Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.listen(PORT, () =>{
    console.log(`server is running at ${PORT}`);
})