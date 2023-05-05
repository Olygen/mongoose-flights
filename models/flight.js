const { Schema, model } = require('mongoose');
const destinationSchema = require('./destination');

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
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
  destinations: {
    type: [destinationSchema]
  }  
});

const Flight = model('Flight', flightSchema)

module.exports = Flight;