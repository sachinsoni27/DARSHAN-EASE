// Database configuration
const mongodbConfig = {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/darshanease',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
};

// Server configuration
const serverConfig = {
    port: process.env.PORT || 5000,
    env: process.env.NODE_ENV || 'development'
};

// CORS configuration
const corsConfig = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

module.exports = {
    mongodbConfig,
    serverConfig,
    corsConfig
};
