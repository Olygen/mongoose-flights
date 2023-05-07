const express = require('express'); // copy to controller
const router = express.Router(); // copy to controller
const Flight = require('../models/flight'); // cut to controller

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
  
  // New // renders a form to create a new fruit
  router.get('/new', (req, res) => {
    res.render('New');
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
  
  // Show
  router.get('/:id', async (req, res) => {
    try {
      // We are using the id given to us in the URL params to query our database.
      // const foundFlight = await Flight.findById(req.params.id);


      const foundFlight = await Flight.findById(req.params.id)
      //.populate('destinations');
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