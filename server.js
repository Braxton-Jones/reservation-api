const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const reservationRouter = require("./routes/reservations")
const api = express()
// Middleware
api.use(
	cors(),
);
api.use(express.json())
api.use("/api/reservations/", reservationRouter)

// Connecting to Mongo DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        api.listen(process.env.PORT, ()=>{
            console.log('Connection is Up')
        });
    })
    .catch((error) => {
        console.log(error)
    })