

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import routes
const resumeRoutes = require('./routes/resumeRoutes');

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection string (directly placed in the code)
const mongoURI = 'mongodb+srv://ridhamvaghasiya6442:jLgxHqOObrH9uryp@cluster0.1mds3.mongodb.net/';

// MongoDB connection
mongoose.connect(mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Routes middleware
app.use('/api/resumes', resumeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

