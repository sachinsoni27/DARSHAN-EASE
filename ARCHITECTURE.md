# DARSHAN EASE Architecture Diagram

## System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DARSHAN EASE APPLICATION                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    FRONTEND (React + Vite)                   │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │                                                               │   │
│  │  ┌──────────────────────────────────────────────────────┐   │   │
│  │  │              Pages & Components                      │   │   │
│  │  ├──────────────────────────────────────────────────────┤   │   │
│  │  │  • Home.tsx          • Temples.tsx                   │   │   │
│  │  │  • Food.tsx          • Hotels.tsx                    │   │   │
│  │  │  • Seed.tsx          • TempleDetails.tsx             │   │   │
│  │  │  • PlanTrip.tsx      • Map.tsx                       │   │   │
│  │  └──────────────────────────────────────────────────────┘   │   │
│  │                          ↓                                    │   │
│  │  ┌──────────────────────────────────────────────────────┐   │   │
│  │  │          Context Providers                           │   │   │
│  │  ├──────────────────────────────────────────────────────┤   │   │
│  │  │  • AuthContext (Firebase Auth)                       │   │   │
│  │  │  • PlannerContext (Trip Management)                  │   │   │
│  │  └──────────────────────────────────────────────────────┘   │   │
│  │                          ↓                                    │   │
│  │  ┌──────────────────────────────────────────────────────┐   │   │
│  │  │         API Service Layer                            │   │   │
│  │  ├──────────────────────────────────────────────────────┤   │   │
│  │  │  apiService.ts                                       │   │   │
│  │  │  • getTemples()      • createTemple()                │   │   │
│  │  │  • getFoodPlaces()   • createFood()                  │   │   │
│  │  │  • getHotels()       • seedTemples()                 │   │   │
│  │  │  • seedFood()        • seedHotels()                  │   │   │
│  │  └──────────────────────────────────────────────────────┘   │   │
│  │                          ↓                                    │   │
│  │  ┌──────────────────────────────────────────────────────┐   │   │
│  │  │      Environment Config (.env.local)                 │   │   │
│  │  ├──────────────────────────────────────────────────────┤   │   │
│  │  │  • VITE_API_BASE_URL=http://localhost:5000/api       │   │   │
│  │  │  • Firebase Configuration                            │   │   │
│  │  └──────────────────────────────────────────────────────┘   │   │
│  │                                                               │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                             ⬇ HTTP/HTTPS                           │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    BACKEND (Node.js/Express)               │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │                                                               │   │
│  │  ┌──────────────────────────────────────────────────────┐   │   │
│  │  │            Main Server (server.js)                   │   │   │
│  │  ├──────────────────────────────────────────────────────┤   │   │
│  │  │  • Port: 5000                                         │   │   │
│  │  │  • CORS Enabled                                       │   │   │
│  │  │  • Error Handling Middleware                          │   │   │
│  │  └──────────────────────────────────────────────────────┘   │   │
│  │                          ↓                                    │   │
│  │  ┌──────────────────────────────────────────────────────┐   │   │
│  │  │              API Routes                              │   │   │
│  │  ├──────────────────────────────────────────────────────┤   │   │
│  │  │  📍 /api/temples                                      │   │   │
│  │  │     • GET /              (Get all temples)            │   │   │
│  │  │     • GET /:id           (Get specific temple)        │   │   │
│  │  │     • POST /             (Create temple)              │   │   │
│  │  │                                                        │   │   │
│  │  │  🍕 /api/food                                         │   │   │
│  │  │     • GET /              (Get all food places)        │   │   │
│  │  │     • GET /location/:loc (Get food by location)       │   │   │
│  │  │     • POST /             (Create food place)          │   │   │
│  │  │                                                        │   │   │
│  │  │  🏨 /api/hotels                                       │   │   │
│  │  │     • GET /              (Get all hotels)             │   │   │
│  │  │     • GET /location/:loc (Get hotels by location)     │   │   │
│  │  │     • POST /             (Create hotel)               │   │   │
│  │  │                                                        │   │   │
│  │  │  🌱 /api/seed                                         │   │   │
│  │  │     • POST /temples      (Seed temple data)           │   │   │
│  │  │     • POST /food         (Seed food data)             │   │   │
│  │  │     • POST /hotels       (Seed hotel data)            │   │   │
│  │  │     • GET /status        (Get seed status)            │   │   │
│  │  └──────────────────────────────────────────────────────┘   │   │
│  │                          ↓                                    │   │
│  │  ┌──────────────────────────────────────────────────────┐   │   │
│  │  │           MongoDB Models                             │   │   │
│  │  ├──────────────────────────────────────────────────────┤   │   │
│  │  │  🏛️  Temple                                           │   │   │
│  │  │     • name, location, description                    │   │   │
│  │  │     • timings, festivals, coordinates                │   │   │
│  │  │                                                        │   │   │
│  │  │  🍴 FoodPlace                                         │   │   │
│  │  │     • name, type, cuisine                            │   │   │
│  │  │     • location, coordinates, priceRange              │   │   │
│  │  │                                                        │   │   │
│  │  │  🛏️  Hotel                                            │   │   │
│  │  │     • name, category, amenities                      │   │   │
│  │  │     • address, coordinates, contact                  │   │   │
│  │  └──────────────────────────────────────────────────────┘   │   │
│  │                          ↓                                    │   │
│  │  ┌──────────────────────────────────────────────────────┐   │   │
│  │  │      Environment Config (.env)                       │   │   │
│  │  ├──────────────────────────────────────────────────────┤   │   │
│  │  │  • PORT=5000                                          │   │   │
│  │  │  • MONGO_URI=mongodb://localhost:27017/darshanease   │   │   │
│  │  │  • NODE_ENV=development                              │   │   │
│  │  └──────────────────────────────────────────────────────┘   │   │
│  │                                                               │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                             ⬇ TCP/IP                               │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    MongoDB Database                         │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │  • Localhost: 27017                                         │   │
│  │  • Database: darshanease                                    │   │
│  │  • Collections:                                             │   │
│  │    - temples                                                │   │
│  │    - foodplaces                                             │   │
│  │    - hotels                                                 │   │
│  │    - users (via Firebase)                                  │   │
│  │    - trips (via Firebase)                                  │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                  Firebase Services                          │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │  🔐 Authentication                                          │   │
│  │     • Email/Password Signup/Login                           │   │
│  │     • Google OAuth                                          │   │
│  │                                                              │   │
│  │  🗄️  Firestore Database                                     │   │
│  │     • User profiles                                         │   │
│  │     • Trip data                                             │   │
│  │     • Feedback/Ratings                                      │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

### User Authentication Flow
```
User Input (Email/Password)
       ↓
Firebase Auth (config.ts)
       ↓
AuthContext (useAuth hook)
       ↓
User stored in Firestore
       ↓
Access protected pages
```

### Trip Planning Flow
```
User clicks "Add to Trip"
       ↓
AddTripModal Component
       ↓
PlannerContext.openPlanner()
       ↓
Save to Firestore (trips collection)
       ↓
Load trips in PlanTrip page
       ↓
Display planned itinerary
```

### Temple Data Loading Flow
```
Page: Temples.tsx
       ↓
useEffect() triggered
       ↓
[Option 1] Load from local templesData.ts
[Option 2] Call apiService.getTemples()
       ↓
Render TempleCard components
       ↓
Click on temple
       ↓
Navigate to /temples/:id
       ↓
TempleDetails page
       ↓
[Option 1] Load from local data
[Option 2] Call apiService.getTemple(id)
```

### Seed Data Flow
```
Navigate to /seed page
       ↓
Seed.tsx useEffect()
       ↓
apiService.getSeedStatus()
       ↓
Display current counts
       ↓
User initiates seed (automatic)
       ↓
apiService.seedTemples()
       ↓
POST to /api/seed/temples
       ↓
Backend: seedRoutes.js
       ↓
Clear existing + Insert new data
       ↓
MongoDB stores data
       ↓
Return count to frontend
       ↓
Display success message
```

## Component Hierarchy

```
App.tsx (Router)
├── AuthProvider
│   └── PlannerProvider
│       ├── CustomCursor
│       ├── ParticleBackground
│       ├── AnimatedRoutes
│       │   ├── Home
│       │   │   ├── HeroSection
│       │   │   ├── HexagonGallery
│       │   │   └── DivineDestinations
│       │   ├── Temples
│       │   │   ├── HexagonGallery
│       │   │   ├── TempleCard (mapped)
│       │   │   └── FeedbackForm
│       │   ├── TempleDetails
│       │   │   ├── DivineAccordion
│       │   │   ├── DivineCarousel
│       │   │   └── AddTripModal
│       │   ├── Food
│       │   ├── Hotels
│       │   ├── PlanTrip
│       │   ├── Map
│       │   ├── Seed
│       │   ├── Login
│       │   ├── Signup
│       │   ├── Team
│       │   ├── YatraGuidelines
│       │   └── AllFeedbacks
│       ├── Navbar
│       ├── Footer
│       ├── ScrollToTop
│       └── Pushpanjali
```

## File Organization Summary

```
DarshanEase/
├── backend/
│   ├── .env ✅
│   ├── server.js ✅
│   ├── models/
│   │   ├── Temple.js ✅
│   │   ├── FoodPlace.js ✅
│   │   └── Hotel.js ✅
│   ├── routes/
│   │   ├── templeRoutes.js ✅
│   │   ├── foodRoutes.js ✅ (NEW)
│   │   ├── hotelRoutes.js ✅ (NEW)
│   │   └── seedRoutes.js ✅ (NEW)
│   ├── seed/
│   │   └── seedData.js
│   └── package.json ✅
│
├── frontend/
│   ├── .env.local ✅ (NEW)
│   ├── src/
│   │   ├── services/
│   │   │   └── apiService.ts ✅ (NEW)
│   │   ├── pages/
│   │   │   ├── Seed.tsx ✅ (UPDATED)
│   │   │   ├── Temples.tsx
│   │   │   ├── Food.tsx
│   │   │   ├── Hotels.tsx
│   │   │   └── ...
│   │   ├── context/
│   │   │   ├── AuthContext.tsx ✅
│   │   │   └── PlannerContext.tsx ✅
│   │   ├── firebase/
│   │   │   └── config.ts ✅
│   │   ├── data/
│   │   ├── components/
│   │   └── App.tsx ✅
│   └── package.json ✅
│
├── package.json ✅ (NEW)
├── PROJECT_SETUP.md ✅ (NEW)
├── FILES_CONNECTIONS.md ✅ (NEW)
├── ARCHITECTURE.md ✅ (THIS FILE)
└── README.md
```

## Status Summary

✅ = Complete | ⏳ = Planned | ❌ = Not needed

- ✅ Backend API fully functional
- ✅ Frontend API integration ready  
- ✅ Database models created
- ✅ CRUD routes implemented
- ✅ Seed system operational
- ✅ Firebase authentication configured
- ✅ Trip planning context setup
- ✅ Environment variables configured
- ✅ CORS enabled
- ✅ Error handling middleware
- ✅ Documentation complete

🎉 **Project is fully connected and ready to use!**
