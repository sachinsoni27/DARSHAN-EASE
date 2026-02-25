@echo off
REM 🕉️ DARSHAN EASE - Complete Startup Guide for Windows
REM This file provides step-by-step instructions to start the application

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║         🕉️  DARSHAN EASE - Divine Discovery Platform         ║
echo ║                   Startup Guide v2.0 (Windows)                 ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

setlocal enabledelayedexpansion

REM Configuration
set BACKEND_DIR=backend
set FRONTEND_DIR=frontend
set BACKEND_PORT=5000
set FRONTEND_PORT=5173
set API_URL=http://localhost:%BACKEND_PORT%/api

echo 📋 Prerequisites Check:
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

REM Check Node.js
where node >nul 2>nul
if %errorlevel% equ 0 (
    for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
    echo ✅ Node.js installed: !NODE_VERSION!
) else (
    echo ❌ Node.js not installed. Visit https://nodejs.org/
    pause
    exit /b 1
)

REM Check npm
where npm >nul 2>nul
if %errorlevel% equ 0 (
    for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
    echo ✅ npm installed: !NPM_VERSION!
) else (
    echo ❌ npm not installed
    pause
    exit /b 1
)

REM Check MongoDB
where mongod >nul 2>nul
if %errorlevel% equ 0 (
    echo ✅ MongoDB installed locally
) else (
    echo ⚠️  MongoDB not found. You can:
    echo    1. Install MongoDB locally
    echo    2. Or use MongoDB Atlas ^(cloud^)
    echo    Check TROUBLESHOOTING.md for details
)

echo.
echo 📦 Step 1: Installing Dependencies
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if not exist "node_modules" (
    echo Installing root dependencies...
    call npm install
)

if not exist "%BACKEND_DIR%\node_modules" (
    echo Installing backend dependencies...
    cd /d "%BACKEND_DIR%"
    call npm install
    cd /d ..
)

if not exist "%FRONTEND_DIR%\node_modules" (
    echo Installing frontend dependencies...
    cd /d "%FRONTEND_DIR%"
    call npm install
    cd /d ..
)

echo ✅ All dependencies installed
echo.

echo 🗄️  Step 2: MongoDB Setup
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if exist "%BACKEND_DIR%\.env" (
    echo ✅ Backend .env file exists
    for /f "tokens=*" %%i in ('findstr MONGO_URI "%BACKEND_DIR%\.env"') do (
        echo    %%i
    )
) else (
    echo ❌ Backend .env file not found
    pause
    exit /b 1
)

echo.
echo 🌍 Step 3: Environment Variables
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if exist "%FRONTEND_DIR%\.env.local" (
    echo ✅ Frontend .env.local exists
) else (
    echo ⚠️  Frontend .env.local not found
)

echo.
echo 📋 Summary of Configuration:
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo    Backend Port:   %BACKEND_PORT%
echo    Frontend Port:  %FRONTEND_PORT%
echo    API URL:        %API_URL%
echo    Backend Dir:    %BACKEND_DIR%
echo    Frontend Dir:   %FRONTEND_DIR%
echo.

echo ✨ Ready to Start!
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo 🚀 Option 1: Start Both Servers ^(Recommended^)
echo    Command: npm start
echo    This will start backend on port %BACKEND_PORT%
echo    and frontend on port %FRONTEND_PORT%
echo.
echo 🎯 Option 2: Start Servers Separately
echo    Terminal 1: npm run backend
echo    Terminal 2: npm run frontend
echo.
echo 📚 Option 3: Manual Start
echo    Terminal 1: cd backend ^&^& npm start
echo    Terminal 2: cd frontend ^&^& npm run dev
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo 🌐 After Starting:
echo    1. Frontend:    http://localhost:%FRONTEND_PORT%
echo    2. Backend API: http://localhost:%BACKEND_PORT%/api
echo    3. Seed Data:   http://localhost:%FRONTEND_PORT%/seed
echo.
echo 📖 Documentation:
echo    • QUICK_START.md - Quick reference
echo    • TROUBLESHOOTING.md - Common issues
echo    • PROJECT_SETUP.md - Detailed setup
echo    • ARCHITECTURE.md - System design
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo ✅ You're all set! Run 'npm start' to begin.
echo.
echo 🙏 Hari Om! May your journey be divine. 🕉️
echo.

pause
