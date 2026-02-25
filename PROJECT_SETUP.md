# DARSHAN EASE - Project Setup & Connection Guide

## ✅ Project Structure & Connections

### Backend Architecture
```
backend/
├── server.js (Main entry point - ALL ROUTES CONFIGURED)
├── .env (Environment variables)
├── models/
│   ├── Temple.js (MongoDB schema)
│   ├── FoodPlace.js (MongoDB schema)
│   └── Hotel.js (MongoDB schema)
└── routes/
    ├── templeRoutes.js (CRUD operations for temples)
    ├── foodRoutes.js (CRUD operations for food places)
    ├── hotelRoutes.js (CRUD operations for hotels)
    └── seedRoutes.js (Data seeding endpoints)
```

### Frontend Architecture
```
frontend/
├── src/
│   ├── main.tsx (React entry point)
│   ├── App.tsx (Router configuration)
│   ├── .env.local (Environment configuration)
│   ├── services/
│   │   └── apiService.ts (Backend API integration)
│   ├── firebase/
│   │   └── config.ts (Firebase setup)
│   ├── context/
│   │   ├── AuthContext.tsx (Authentication)
│   │   └── PlannerContext.tsx (Trip planning)
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Temples.tsx
│   │   ├── Food.tsx
│   │   ├── Hotels.tsx
│   │   ├── Seed.tsx (Data seeding interface)
│   │   ├── PlanTrip.tsx
│   │   ├── TempleDetails.tsx
│   │   └── ... (other pages)
│   ├── data/
│   │   ├── templesData.ts
│   │   ├── foodData.ts
│   │   └── accommodationData.ts
│   └── components/
│       └── (All reusable components)
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Temple Endpoints
- `GET /temples` - Get all temples
- `GET /temples/:id` - Get specific temple
- `POST /temples` - Create temple (Admin)

### Food Endpoints
- `GET /food` - Get all food places
- `GET /food/location/:location` - Get food by location
- `GET /food/:id` - Get specific food place
- `POST /food` - Create food place

### Hotel Endpoints
- `GET /hotels` - Get all hotels
- `GET /hotels/location/:location` - Get hotels by location
- `GET /hotels/:id` - Get specific hotel
- `POST /hotels` - Create hotel

### Seed Endpoints
- `POST /seed/temples` - Seed temple data
- `POST /seed/food` - Seed food data
- `POST /seed/hotels` - Seed hotel data
- `GET /seed/status` - Get current seed status

## 🚀 Setup Instructions

### Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create .env file with:
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/darshanease
# NODE_ENV=development

# Start server
npm start
# or if script is not configured, use:
node server.js
```

### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Ensure .env.local exists with API configuration
# VITE_API_BASE_URL=http://localhost:5000/api

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌱 Seeding Data

### Method 1: Via Frontend UI
1. Start both backend and frontend servers
2. Navigate to `/seed` page
3. Click seed button to populate database

### Method 2: Via API
```bash
# Seed temples
curl -X POST http://localhost:5000/api/seed/temples

# Seed food places
curl -X POST http://localhost:5000/api/seed/food

# Seed hotels
curl -X POST http://localhost:5000/api/seed/hotels

# Check seed status
curl http://localhost:5000/api/seed/status
```

## 📦 Dependencies

### Backend
- express@5.2.1
- mongoose@9.0.2
- cors@2.8.5
- dotenv@16.4.5

### Frontend
- react@19.2.0
- react-router-dom@7.11.0
- firebase@12.7.0
- tailwindcss@3.4.17
- framer-motion@12.23.26
- leaflet@1.9.4
- react-leaflet@5.0.0

## 🔐 Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/darshanease
NODE_ENV=development
```

### Frontend (.env.local)
```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=AIzaSyBFHHIUlzSDROryN_LmOAElCHCQIATenKU
VITE_FIREBASE_AUTH_DOMAIN=darshanease-62863.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=darshanease-62863
VITE_FIREBASE_STORAGE_BUCKET=darshanease-62863.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=815747486878
VITE_FIREBASE_APP_ID=1:815747486878:web:4b53ae15d07b8bab46d78f
```

## 📱 Key Features

### Authentication
- Email/Password signup via Firebase
- Google Sign-in
- Firebase Firestore for user data

### Trip Planning
- Create and manage trips
- Add temples to trips
- UI for planning multiple temple visits

### Temple Discovery
- View all temples with details
- Search and filter temples
- Location-based discovery with Leaflet maps

### Related Services
- Find food places near temples
- Find hotels for accommodation
- Feedback and ratings

## 🐛 Troubleshooting

### Backend not starting?
- Check if MongoDB is running: `mongod`
- Verify PORT 5000 is not in use
- Check .env file exists with MONGO_URI

### Frontend can't connect to API?
- Verify backend is running on port 5000
- Check .env.local has correct VITE_API_BASE_URL
- Check CORS is enabled (should be in server.js)
- Check browser console for specific errors

### Data not seeding?
- Ensure MongoDB is connected
- Visit `/seed` page or call `/api/seed/*` endpoints
- Check browser/server console for errors

## 📖 Additional Resources

- Frontend Docs: frontend/README.md
- Main Docs: README.md
- Firebase Config: frontend/src/firebase/config.ts
- API Service: frontend/src/services/apiService.ts

## ✨ Status

- ✅ Backend API fully connected
- ✅ Frontend API service created
- ✅ Seed endpoints configured
- ✅ Environment files set up
- ✅ All routes integrated
- ✅ Firebase authentication configured
- ✅ CORS enabled
