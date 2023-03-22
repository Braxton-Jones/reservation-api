const mongoose = require('mongoose')
const Reservation = require("../models/reservationModel")

// Post A Reservation
const scheduleReservation = async(req,res) =>{
    const {name, email, people, date} = req.body
    try{
        const reservation = await Reservation.create({name, email, people, date})
        res.status(200).json(reservation)
    }
    catch(error){
        res.status(400).json({error:error})
    }
}

// Get All Reservations
const retriveReservations = async(req,res) =>{
    const reservation = await Reservation.find({}).sort({createdAt: -1})
    res.status(200).json(reservation);
}

// Delete/Complete a Reservation
const deleteReservation = async(req,res) => {
    const {id} = req.params
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({error: "no reservation exist."})
    }

    const reservation = await Reservation.findOneAndDelete({_id:id})

    if(!reservation){
        return res.status(400).json({ error: 'no reservation exist.' })
    }

    res.status(200).json(reservation)
}

module.exports={
    retriveReservations,
    deleteReservation,
    scheduleReservation
};