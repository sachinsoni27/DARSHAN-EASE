#!/bin/bash
# 🕉️ DARSHAN EASE - Complete Startup Guide
# This file provides step-by-step instructions to start the application

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         🕉️  DARSHAN EASE - Divine Discovery Platform         ║"
echo "║                    Startup Guide v2.0                          ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Configuration
BACKEND_DIR="backend"
FRONTEND_DIR="frontend"
BACKEND_PORT=5000
FRONTEND_PORT=5173
API_URL="http://localhost:${BACKEND_PORT}/api"

echo "📋 Prerequisites Check:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo "✅ Node.js installed: $NODE_VERSION"
else
    echo "❌ Node.js not installed. Visit https://nodejs.org/"
    exit 1
fi

# Check npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo "✅ npm installed: $NPM_VERSION"
else
    echo "❌ npm not installed"
    exit 1
fi

# Check MongoDB
if command -v mongod &> /dev/null; then
    echo "✅ MongoDB installed locally"
else
    echo "⚠️  MongoDB not found. You can:"
    echo "   1. Install MongoDB locally"
    echo "   2. Or use MongoDB Atlas (cloud)"
    echo "   Check TROUBLESHOOTING.md for details"
fi

echo ""
echo "📦 Step 1: Installing Dependencies"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ ! -d "node_modules" ]; then
    echo "Installing root dependencies..."
    npm install
fi

if [ ! -d "$BACKEND_DIR/node_modules" ]; then
    echo "Installing backend dependencies..."
    cd "$BACKEND_DIR"
    npm install
    cd ..
fi

if [ ! -d "$FRONTEND_DIR/node_modules" ]; then
    echo "Installing frontend dependencies..."
    cd "$FRONTEND_DIR"
    npm install
    cd ..
fi

echo "✅ All dependencies installed"
echo ""

echo "🗄️  Step 2: MongoDB Setup"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "$BACKEND_DIR/.env" ]; then
    echo "✅ Backend .env file exists"
    MONGO_URI=$(grep "MONGO_URI" "$BACKEND_DIR/.env")
    echo "   MongoDB URI: $MONGO_URI"
else
    echo "❌ Backend .env file not found"
    exit 1
fi

echo ""
echo "🌍 Step 3: Environment Variables"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f "$FRONTEND_DIR/.env.local" ]; then
    echo "✅ Frontend .env.local exists"
else
    echo "⚠️  Frontend .env.local not found"
fi

echo ""
echo "📋 Summary of Configuration:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "   Backend Port:   $BACKEND_PORT"
echo "   Frontend Port:  $FRONTEND_PORT"
echo "   API URL:        $API_URL"
echo "   Backend Dir:    $BACKEND_DIR"
echo "   Frontend Dir:   $FRONTEND_DIR"
echo ""

echo "✨ Ready to Start!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🚀 Option 1: Start Both Servers (Recommended)"
echo "   Command: npm start"
echo "   This will start backend on port $BACKEND_PORT"
echo "   and frontend on port $FRONTEND_PORT"
echo ""
echo "🎯 Option 2: Start Servers Separately"
echo "   Terminal 1: npm run backend"
echo "   Terminal 2: npm run frontend"
echo ""
echo "📚 Option 3: Manual Start"
echo "   Terminal 1: cd backend && npm start"
echo "   Terminal 2: cd frontend && npm run dev"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🌐 After Starting:"
echo "   1. Frontend:    http://localhost:$FRONTEND_PORT"
echo "   2. Backend API: http://localhost:$BACKEND_PORT/api"
echo "   3. Seed Data:   http://localhost:$FRONTEND_PORT/seed"
echo ""
echo "📖 Documentation:"
echo "   • QUICK_START.md - Quick reference"
echo "   • TROUBLESHOOTING.md - Common issues"
echo "   • PROJECT_SETUP.md - Detailed setup"
echo "   • ARCHITECTURE.md - System design"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✅ You're all set! Run 'npm start' to begin."
echo ""
echo "🙏 Hari Om! May your journey be divine. 🕉️"
echo ""
