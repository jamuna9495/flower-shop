// server.js
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();

// Middleware: This allows your server to read JSON data sent from the frontend
app.use(express.json()); 

// Static Middleware: This tells Express to serve files from the 'public' folder
// When someone visits your URL, it will automatically look for 'index.html' here.
app.use(express.static('public')); 

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Project Zenith is live at http://localhost:${PORT}`);
});
