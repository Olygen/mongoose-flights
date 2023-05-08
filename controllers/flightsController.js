const express = require('express'); // copy to controller
const router = express.Router(); // copy to controller
const Flight = require('../models/flight'); // cut to controller
const Destination = require('../models/destination');

// I.N.D.U.C.E.S. for FLIGHTS
//=========================

// Index
  
  router.get('/', async (req, res) => {
    console.log('Index Controller Func. running...');
    try {
      const foundFlight = await Flight.find({});
      res.status(200).render('Index', { flight: foundFlight });
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  // New // renders a form to create a new flight
  router.get('/new', (req, res) => {
    res.render('New');
  });
 
//* implementing User Story: 
// when viewing the details page (showview) for a flight, 
// I want to be able to add a destination for that flight, 
// including its arrivaldate/time & one of the established airport codes

  // New !!!!!!!! // need to be before CREATE
  // renders a form to create a new destination  

  router.get('/:id/destinations/new', async (req, res) => {
    try {
      const foundFlight = await Flight.findById(req.params.id);
      res.render('NewDestination', { flight: foundFlight });
    } catch (err) {
      res.status(400).send(err);
    }
  });

    // Create // recieves info from new route to then create a new flight w/ it
  router.post('/', async (req, res) => {
    try {
      const newFlight = await Flight.create(req.body);
      console.log(newFlight);
      //console.log(flights);
      // redirect is making a GET request to the path flights
      res.redirect('/flights');
    } catch (err) {
      res.status(400).send(err);
    }
  });

//* implementing User Story: 
// when viewing the details page (showview) for a flight, 
// I want to be able to add a destination for that flight, 
// including its arrivaldate/time & one of the established airport codes

// Create !!!!!!!!!!!!!! need to be before SHOW
// We need to create Destination and reference 
// the Destination in the flight with arrival type Date
// and airport type string. 

router.post('/:id', async (req, res) => {
    try {
    // We are using the id given to us in the URL params to query our database.
        const flight = await Flight.findById(req.params.id);
        const destination = new Destination({
            airport: req.body.airport,
            arrival: req.body.arrival
    });
        await destination.save();
        flight.destinations.push(destination);
        await flight.save();
        res.redirect(`/flights/${flight._id}`);
    } catch (err) {
    res.status(400).send(err);
    }
});


  // Show Querying the Flight document and populating the destination
  router.get('/:id', async (req, res) => {
    try {
      // We are using the id given to us in the URL params to query our database.
      const foundFlight = await Flight.findById(req.params.id).populate('destinations'); // will be added later
       res.render('Show', {
        //second param must be an object
        flight: foundFlight,
        //there will be a variable available inside the jsx file called flight, its value is foundFlight
      });
    } catch (err) {
        res.status(400).send(err);
      }
    });

  module.exports = router;