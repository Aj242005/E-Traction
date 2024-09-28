// backend/routes/chargerRoutes.js
const express = require('express');
const Charger = require('../models/charger');

const router = express.Router();

// Get all chargers
router.get('/', async (req, res) => {
    try {
        const chargers = await Charger.find();
        res.json(chargers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new charger
router.post('/', async (req, res) => {
    const charger = new Charger({
        location: {
            type: 'Point',
            coordinates: req.body.coordinates,
        },
        address: req.body.address,
        chargingType: req.body.chargingType,
        status: req.body.status,
    });

    try {
        const newCharger = await charger.save();
        res.status(201).json(newCharger);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Add more routes (update, delete, etc.) as needed

module.exports = router;
