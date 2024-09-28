// backend/models/Charger.js
const mongoose = require('mongoose');

// Define the Charger schema
const chargerSchema = new mongoose.Schema({
    location: {
        type: {
            type: String, // 'Point'
            enum: ['Point'],
            required: true,
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true,
        },
    },
    address: {
        type: String,
        required: true,
    },
    chargingType: {
        type: String,
        enum: ['AC', 'DC'],
        required: true,
    },
    status: {
        type: String,
        enum: ['available', 'busy'],
        default: 'available',
    },
});

// Create a geospatial index for location
chargerSchema.index({ location: '2dsphere' });

// Create the Charger model
const Charger = mongoose.model('Charger', chargerSchema);

module.exports = Charger;
