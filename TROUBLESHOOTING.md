# 🔧 DARSHAN EASE - Troubleshooting & Connection Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd DarshanEase
npm run install-all
```

### 2. Verify Environment Files
Ensure these files exist:
- `backend/.env`
- `frontend/.env.local`

### 3. Start MongoDB
```bash
# Windows - If installed locally
mongod

# Or use MongoDB Atlas - Update MONGO_URI in backend/.env
```

### 4. Start Both Servers
```bash
npm start
```

---

## ✅ Verification Checklist

### Backend
- [ ] Port 5000 is available
- [ ] MongoDB is running
- [ ] `.env` file exists with correct MONGO_URI
- [ ] All route files are in `backend/routes/`
- [ ] Models are in `backend/models/`
- [ ] `npm start` works without errors

### Frontend
- [ ] Port 5173 is available
- [ ] `.env.local` file exists
- [ ] `VITE_API_BASE_URL=http://localhost:5000/api`
- [ ] Firebase keys are configured
- [ ] `npm run dev` starts successfully

### Connection
- [ ] Backend responds to `http://localhost:5000`
- [ ] Frontend can access `http://localhost:5173`
- [ ] Frontend API calls reach backend (check Network tab)
- [ ] No CORS errors in console

---

## 🐛 Common Issues & Solutions

### Issue 1: Backend Port 5000 Already in Use

**On Windows:**
```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID)
taskkill /PID {PID} /F
```

**On macOS/Linux:**
```bash
# Find process
lsof -i :5000

# Kill process
kill -9 {PID}
```

**Or change port in `backend/.env`:**
```
PORT=5001
```

---

### Issue 2: MongoDB Connection Fails

**Check if MongoDB is running:**
```bash
# Windows (if installed)
tasklist | findstr mongod

# macOS
brew services list | grep mongodb

# Linux
systemctl status mongod
```

**Start MongoDB:**
```bash
# Windows
mongod

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**Or use MongoDB Atlas:**
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Update `MONGO_URI` in `backend/.env`
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/darshanease
```

---

### Issue 3: CORS Errors

**Error Message:**
```
Access to XMLHttpRequest at 'http://localhost:5000/api/...' 
from origin 'http://localhost:5173' has been blocked by CORS policy
```

**Solution:**
1. Check `backend/config.js` has correct CORS settings
2. Ensure `backend/server.js` includes CORS middleware
3. Check `frontend/.env.local` has correct API URL

**backend/config.js:**
```javascript
const corsConfig = {
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
```

---

### Issue 4: Frontend Can't Connect to API

**Check Network Tab in Browser DevTools:**
1. Open DevTools (F12)
2. Go to Network tab
3. Make an API call
4. Check if request is sent to `http://localhost:5000/api/...`
5. Check response status and any error messages

**Verify API Base URL:**
```bash
# In Browser Console
console.log(import.meta.env.VITE_API_BASE_URL)
# Should output: http://localhost:5000/api
```

**Check Backend is Running:**
```bash
# In Terminal
curl http://localhost:5000

# Should show API info
```

---

### Issue 5: Database Seeding Not Working

**Check MongoDB Connection First:**
```bash
# In Terminal, run
npm run backend

# Should see: ✅ MongoDB Connected: DARSHAN EASE DB
```

**Manually Seed Data:**
```bash
# In another terminal
curl -X POST http://localhost:5000/api/seed/temples
curl -X POST http://localhost:5000/api/seed/food
curl -X POST http://localhost:5000/api/seed/hotels
```

**Or via Browser:**
1. Visit `http://localhost:5173/seed`
2. Wait for data to populate
3. Check browser console for errors

---

### Issue 6: React Component Errors

**Clear node_modules and reinstall:**
```bash
# Frontend
cd frontend
rm -rf node_modules package-lock.json
npm install

# Or Backend
cd backend
rm -rf node_modules package-lock.json
npm install
```

**Clear Browser Cache:**
- Hard Refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (macOS)

---

### Issue 7: TypeScript/Build Errors

**Frontend Build Error:**
```bash
cd frontend
npm run build

# Check for type errors
```

**Solution:**
```bash
# Ensure typescript is installed
npm install -D typescript

# Run type check
npx tsc --noEmit
```

---

## 🔍 Debugging Tips

### 1. Check Backend Logs
```bash
# Look for errors in terminal where backend is running
# Should see:
# ✅ MongoDB Connected
# 🕉️  DARSHAN EASE Server Running
# ✅ Port: 5000
```

### 2. Check Frontend Console
```javascript
// Open DevTools (F12) → Console
// Look for:
// - API errors
// - Component errors
// - Network failures

// Test API manually
fetch('http://localhost:5000/api/temples')
  .then(r => r.json())
  .then(d => console.log(d))
```

### 3. Check Network Requests
1. Open DevTools → Network tab
2. Make an API call (click a button, navigate page)
3. Look for request to `http://localhost:5000/api/...`
4. Check status code (should be 200, 201 for success)
5. Check response in Response tab

### 4. MongoDB Compass
- Download: https://www.mongodb.com/products/tools/compass
- Connect to your MongoDB instance
- Browse collections to verify data was seeded

---

## 📋 File Structure Verification

### Backend Must Have
```
backend/
├── .env                    ✅ Environment config
├── config.js              ✅ Configuration
├── server.js              ✅ Main server
├── package.json           ✅ Dependencies
├── models/
│   ├── Temple.js          ✅ Model
│   ├── FoodPlace.js       ✅ Model
│   └── Hotel.js           ✅ Model
└── routes/
    ├── templeRoutes.js    ✅ API routes
    ├── foodRoutes.js      ✅ API routes (NEW)
    ├── hotelRoutes.js     ✅ API routes (NEW)
    └── seedRoutes.js      ✅ API routes (NEW)
```

### Frontend Must Have
```
frontend/
├── .env.local             ✅ Environment config
├── vite.config.ts         ✅ Vite config
├── tsconfig.json          ✅ TypeScript config
├── package.json           ✅ Dependencies
└── src/
    ├── config.ts          ✅ Frontend config (NEW)
    ├── App.tsx            ✅ Main app
    ├── main.tsx           ✅ Entry point
    ├── services/
    │   └── apiService.ts  ✅ API client (NEW)
    ├── components/
    │   ├── ErrorBoundary.tsx     ✅ Error handling (NEW)
    │   └── LoadingSkeletons.tsx  ✅ Loading states (NEW)
    ├── hooks/
    │   └── useApi.ts      ✅ Custom hooks (NEW)
    ├── utils/
    │   └── apiHelpers.ts  ✅ Helper functions (NEW)
    ├── pages/
    ├── context/
    └── data/
```

---

## 🧪 Testing Connections

### Test Backend Endpoints
```bash
# Get all temples
curl http://localhost:5000/api/temples

# Get all food places
curl http://localhost:5000/api/food

# Get all hotels
curl http://localhost:5000/api/hotels

# Check seed status
curl http://localhost:5000/api/seed/status
```

### Test Frontend Loading
1. Open `http://localhost:5173` in browser
2. Check console for any errors
3. Try navigating to different pages
4. Try seeding data from `/seed` page

---

## 📞 Still Having Issues?

### Check These Files:
1. **PROJECT_SETUP.md** - Complete setup guide
2. **ARCHITECTURE.md** - System architecture
3. **FILES_CONNECTIONS.md** - File relationships
4. **QUICK_START.md** - Quick reference

### Logs to Check:
- Backend terminal output
- Browser DevTools Console
- Browser DevTools Network tab
- MongoDB logs

### Common Error Messages:

| Error | Cause | Solution |
|-------|-------|----------|
| `connect ECONNREFUSED 127.0.0.1:5000` | Backend not running | Start backend: `npm run backend` |
| `CORS error` | Frontend-backend mismatch | Check API URL in `.env.local` |
| `MongoDB connection failed` | MongoDB not running | Start MongoDB or use Atlas |
| `Module not found` | Missing dependencies | Run `npm install` |
| `PORT 5000 already in use` | Another process on port | Change PORT in `.env` |

---

## ✨ Success Indicators

✅ Backend is working when:
- Terminal shows: `✅ MongoDB Connected`
- Terminal shows: `✅ DARSHAN EASE Server Running`
- `curl http://localhost:5000` returns JSON response

✅ Frontend is working when:
- Browser loads without JavaScript errors
- Console shows: `🕉️ DARSHAN EASE V2.0 - Mobile Optimization Live 🚀`
- Can navigate between pages

✅ Connection is working when:
- Can make API calls from frontend
- Network tab shows requests to `http://localhost:5000/api/...`
- Responses have status 200
- Can seed data from `/seed` page

---

## 🎉 You're Good to Go!

If all checks pass, your DARSHAN EASE application is fully connected and ready to use!

```
npm start
# Open http://localhost:5173
# Navigate to /seed to populate data
# Enjoy exploring!
```

🙏 Hari Om!
