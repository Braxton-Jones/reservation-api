const express = require('express')
const router = express.Router()
const{
    scheduleReservation,
    retriveReservations,
    deleteReservation
} = require("../controllers/reservationController")

// Routes
router.get('/', retriveReservations)

router.delete("/:id", deleteReservation)

router.post('/', scheduleReservation)

module.exports = router