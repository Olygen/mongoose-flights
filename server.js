require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Fruit = require('./models/fruit');
const { connect, connection } = require('mongoose');

const connectDB = require('./config/database');

// ...

connectDB();