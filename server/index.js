const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const User = require("../server/model/user")
mongoose.connect('mongodb://localhost:27017/full-mern-app')

app.use(cors())
app.use(express.json())


app.post('/api/register', async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ user: user, status: "ok" }); 
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "Not ok", message: "Internal server error" }); 
    }

})

app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });

        if (user) {
            // Send a response if the user is found
            res.json({status: "ok", user: "true"});
        } else {
            // Send a response if no user is found
            res.json({status: "not ok", user: "false"});
        }
    } catch (error) {
        // Handle any errors that occur during the execution of the above code
        console.error("Error during login:", error);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
});



app.listen(1212, () => {
    console.log('Server Started on 1212')
} )