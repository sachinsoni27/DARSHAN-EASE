# 🚀 DARSHAN EASE - Quick Start Guide

Welcome to DARSHAN EASE! This guide will help you get everything connected and running smoothly.

## ✅ What's Been Connected

### Backend
- ✅ **Express Server** with all API routes
- ✅ **MongoDB Models** (Temple, FoodPlace, Hotel)
- ✅ **API Routes** for CRUD operations
- ✅ **Seed Routes** for database initialization
- ✅ **Environment Configuration** (.env)

### Frontend  
- ✅ **API Service** for backend communication
- ✅ **Firebase Integration** for authentication
- ✅ **Context Providers** for state management
- ✅ **Seed Page** UI for data initialization
- ✅ **Environment Configuration** (.env.local)

### Infrastructure
- ✅ **CORS Configuration** for frontend-backend communication
- ✅ **Error Handling** middleware
- ✅ **Health Check** endpoints
- ✅ **Database Connection** management

## 🛠️ Installation & Setup

### Step 1: Install All Dependencies
```bash
cd DarshanEase
npm run install-all
```

This will install dependencies for:
- Root project
- Backend
- Frontend

### Step 2: Verify MongoDB is Running
```bash
# On Windows (if MongoDB is installed locally)
mongod

# Or use MongoDB Atlas (cloud)
# Update MONGO_URI in backend/.env
```

### Step 3: Start the Application

**Option A: Start Both Servers Together**
```bash
npm start
```

**Option B: Start Servers Separately**
```bash
# Terminal 1 - Backend
npm run backend

# Terminal 2 - Frontend
npm run frontend
```

### Step 4: Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api
- **Seed Page**: http://localhost:5173/seed

## 📊 Seed Data

### Automatic Seeding (Recommended)
1. Open frontend at http://localhost:5173
2. Navigate to `/seed` page
3. Data automatically seeds on page load
4. You'll see real-time status updates

### Manual API Calls
```bash
# Seed temples
curl -X POST http://localhost:5000/api/seed/temples

# Seed food places
curl -X POST http://localhost:5000/api/seed/food

# Seed hotels
curl -X POST http://localhost:5000/api/seed/hotels

# Check status
curl http://localhost:5000/api/seed/status
```

## 📡 Testing API Endpoints

### Get All Temples
```bash
curl http://localhost:5000/api/temples
```

### Get Specific Temple
```bash
curl http://localhost:5000/api/temples/{id}
```

### Get All Food Places
```bash
curl http://localhost:5000/api/food
```

### Get Food by Location
```bash
curl http://localhost:5000/api/food/location/Vrindavan
```

### Get All Hotels
```bash
curl http://localhost:5000/api/hotels
```

## 🔍 Project Structure

```
DarshanEase/
├── backend/           (Node.js + Express + MongoDB)
│   ├── .env          (Database & Server config)
│   ├── server.js     (Main server)
│   ├── routes/       (API endpoints)
│   ├── models/       (Database schemas)
│   └── seed/         (Initial data)
│
├── frontend/          (React + TypeScript + Vite)
│   ├── .env.local    (API & Firebase config)
│   ├── src/
│   │   ├── services/apiService.ts (Backend API client)
│   │   ├── pages/    (Route pages)
│   │   ├── context/  (State management)
│   │   └── firebase/ (Auth config)
│   └── package.json
│
└── Documentation Files
    ├── PROJECT_SETUP.md      (Detailed setup guide)
    ├── ARCHITECTURE.md       (System architecture)
    ├── FILES_CONNECTIONS.md  (File relationships)
    └── QUICK_START.md        (This file)
```

## 📝 Key Files Modified/Created

### New Files
- ✅ `backend/.env`
- ✅ `backend/routes/foodRoutes.js`
- ✅ `backend/routes/hotelRoutes.js`
- ✅ `backend/routes/seedRoutes.js`
- ✅ `frontend/.env.local`
- ✅ `frontend/src/services/apiService.ts`
- ✅ `package.json` (root)
- ✅ Documentation files

### Updated Files
- ✅ `backend/server.js` - Added all routes
- ✅ `frontend/src/pages/Seed.tsx` - Connected to API service

## 🎯 Features Ready to Use

### Authentication
- Email/Password signup & login
- Google authentication
- User profile management

### Temple Discovery
- Browse all temples
- View temple details
- See location on map
- Read temple history & timings

### Trip Planning
- Create multiple trips
- Add temples to trips
- Manage trip itineraries
- Export as PDF

### Restaurant & Hotel Guide
- Find food places by location
- Browse accommodation options
- Filter by category & price range

### Seed Management
- Automatically populate database
- View seed status
- Track data counts in real-time

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

## 🐛 Troubleshooting

### Backend won't start?
- Check if port 5000 is available
- Verify MongoDB is running
- Check backend/.env exists

### Frontend can't connect to API?
- Verify backend is running on port 5000
- Check frontend/.env.local is configured
- Check browser console for CORS errors

### Data not seeding?
- Ensure MongoDB is connected
- Visit /seed page in browser
- Check server logs for errors

### Port Already in Use?
```bash
# Find process using port 5000 (on Windows cmd)
netstat -ano | findstr :5000

# Kill the process (replace PID)
taskkill /PID {PID} /F
```

## 📚 Documentation

- **PROJECT_SETUP.md** - Complete setup & API reference
- **ARCHITECTURE.md** - System design & data flow
- **FILES_CONNECTIONS.md** - File relationships & connections
- **README.md** - Original project README

## 💡 Tips

1. **Hot Reload**: Frontend automatically reloads on file changes
2. **API Testing**: Use Postman or curl for API endpoints
3. **Database**: Use MongoDB Compass to view data directly
4. **Debugging**: Check console logs in both browser and terminal
5. **Environment**: Don't commit .env files to git (they're in .gitignore)

## 🎉 You're All Set!

Everything is connected and ready to use. Start the servers and enjoy exploring DARSHAN EASE!

### Next Steps:
1. ✅ Run `npm start`
2. ✅ Open http://localhost:5173
3. ✅ Go to /seed page to populate data
4. ✅ Browse temples, food, hotels
5. ✅ Create an account and plan your trip!

## 📞 Need Help?

Check these files for more info:
- API Documentation: See `PROJECT_SETUP.md`
- Architecture Overview: See `ARCHITECTURE.md`
- File Connections: See `FILES_CONNECTIONS.md`

---

**Happy Exploring! 🕉️ Hari Om! 🙏**
