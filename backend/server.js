const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const { serverConfig, corsConfig, mongodbConfig } = require('./config');

const app = express();
const PORT = serverConfig.port;

// Middleware
app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Routes
const templeRoutes = require('./routes/templeRoutes');
const foodRoutes = require('./routes/foodRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const seedRoutes = require('./routes/seedRoutes');

// Use Routes
app.use('/api/temples', templeRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/seed', seedRoutes);

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(mongodbConfig.uri, mongodbConfig.options);
        console.log('✅ MongoDB Connected: DARSHAN EASE DB');
    } catch (err) {
        console.error('❌ MongoDB Connection Error:', err);
        process.exit(1);
    }
};

connectDB();

// Health Check Route
app.get('/', (req, res) => {
    res.json({ 
        message: 'DARSHAN EASE API is running...',
        version: '1.0.0',
        endpoints: {
            temples: '/api/temples',
            food: '/api/food',
            hotels: '/api/hotels',
            seed: '/api/seed'
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});

app.listen(PORT, () => {
    console.log(`\n🕉️  DARSHAN EASE Server Running`);
    console.log(`✅ Port: ${PORT}`);
    console.log(`✅ Environment: ${serverConfig.env}`);
    console.log(`✅ API URL: http://localhost:${PORT}/api`);
    console.log(`\n📚 Available Endpoints:`);
    console.log(`   • GET/POST /api/temples`);
    console.log(`   • GET/POST /api/food`);
    console.log(`   • GET/POST /api/hotels`);
    console.log(`   • POST /api/seed/temples, /food, /hotels`);
    console.log(`   • GET /api/seed/status\n`);
});
