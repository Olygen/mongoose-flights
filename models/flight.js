const { Schema, model } = require('mongoose');

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United', "Delta"],
    required: true
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    required: true,
    default: Date.now() + 365 * 24 * 60 * 60 * 1000 // one year from date created
  },
  airport: {
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    default: 'SAN'
  },
  // Referencing the Destination model (Array of destinations)
  destinations: [
    {
      type: Schema.Types.ObjectId, // We are useing Mongo's custom type of ObjectId
      ref: 'Destination', // ref should be equal to the model's name (the 1st arg when creating a model)
    },
  ]  
});

const Flight = model('Flight', flightSchema);

module.exports = Flight;