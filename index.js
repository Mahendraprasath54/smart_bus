require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./src/database');
const busRouter = require('./src/route/bus_route');

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to database
dbConnect();

// Routes
app.use('/api/bus', busRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        success: false, 
        message: 'Something went wrong!' 
    });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});