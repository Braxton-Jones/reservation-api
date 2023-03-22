const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const reservationRouter = require("./routes/reservations")
const PORT = process.env.PORT
const api = express()
// Middleware
api.use(
	cors(),
);
api.use(express.json())
api.use(reservationRouter)

// Connecting to Mongo DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        api.listen(PORT, ()=>{
            console.log('Connection is Up')
        });
    })
    .catch((error) => {
        console.log(error)
    })