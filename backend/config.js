// Database configuration
// The MongoDB driver removed support for `useNewUrlParser` and
// `useUnifiedTopology` in newer releases. Passing them now causes a
// MongoParseError (`options usenewurlparser, useunifiedtopology are not
// supported`). Mongoose 7+ automatically handles parsing and topology
// management, so we simply keep an empty options object (additional runtime
// options like poolSize can be added here if needed).
const mongodbConfig = {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/darshanease',
    options: {}
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
