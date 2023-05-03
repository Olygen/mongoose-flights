require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Flight = require('./models/flight');
const db = require('./config/database');

// This line of code will run the function below once 
// the connection to MongoDB has been established.
db.once('open', () => {
  console.log('connected to mongo');
});

// View Engine Middleware Configure
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
// This line tells the render method the default file extension to look for.
app.set('view engine', 'jsx');
// This line sets the render method's default location to look for a jsx file to render. Without this line of code we would have to specific the views directory everytime we use the render method
app.set('views', './views');

// Custom Middleware
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log('Middleware running...');
  next();
});

// I.N.D.U.C.E.S. for FLIGHTS
//=========================

// Index
app.get('/', (req, res) => {
  console.log('Index Controller Func. running...');
  res.send(`
    <h1>
    <a href="/flights">Welcome to Flights App!</a>
    </h1>
  `);
});

app.get('/flights', async (req, res) => {
  console.log('Index Controller Func. running...');
  try {
    const foundFlight = await Flight.find({});
    res.status(200).render('Index', { flight: foundFlight });
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get('/flights', (req, res) => {
  console.log('Index Controller Func. running...');
  res.render("Index", { pokemon: Pokemon });
});

// New // renders a form to create a new fruit
app.get('/flights/new', (req, res) => {
  res.render('New');
});

// Create // recieves info from new route to then create a new flight w/ it
app.post('/flights', async (req, res) => {
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
app.get('/flights/:id', async (req, res) => {
  try {
    // We are using the id given to us in the URL params to query our database.
    const foundFlight = await Flight.findById(req.params.id);
    res.render('Show', {
      //second param must be an object
      flight: foundFlight,
      //there will be a variable available inside the jsx file called flight, its value is foundFlight
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});