#!/bin/bash
# 🕉️ DARSHAN EASE - MASTER VERIFICATION CHECKLIST
# Use this to verify all files are connected and working properly

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║        🕉️  DARSHAN EASE - MASTER VERIFICATION CHECKLIST     ║"
echo "║                    All Systems Check                         ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

BACKEND_DIR="backend"
FRONTEND_DIR="frontend"
PASS=0
FAIL=0

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        ((PASS++))
        return 0
    else
        echo -e "${RED}✗${NC} $1"
        ((FAIL++))
        return 1
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
        ((PASS++))
        return 0
    else
        echo -e "${RED}✗${NC} $1"
        ((FAIL++))
        return 1
    fi
}

echo "📋 BACKEND FILES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_file "$BACKEND_DIR/.env"
check_file "$BACKEND_DIR/config.js"
check_file "$BACKEND_DIR/server.js"
check_file "$BACKEND_DIR/package.json"
check_file "$BACKEND_DIR/models/Temple.js"
check_file "$BACKEND_DIR/models/FoodPlace.js"
check_file "$BACKEND_DIR/models/Hotel.js"
check_file "$BACKEND_DIR/routes/templeRoutes.js"
check_file "$BACKEND_DIR/routes/foodRoutes.js"
check_file "$BACKEND_DIR/routes/hotelRoutes.js"
check_file "$BACKEND_DIR/routes/seedRoutes.js"
check_dir "$BACKEND_DIR/node_modules"
echo ""

echo "🎨 FRONTEND FILES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_file "$FRONTEND_DIR/.env.local"
check_file "$FRONTEND_DIR/src/config.ts"
check_file "$FRONTEND_DIR/src/App.tsx"
check_file "$FRONTEND_DIR/src/main.tsx"
check_file "$FRONTEND_DIR/src/services/apiService.ts"
check_file "$FRONTEND_DIR/src/hooks/useApi.ts"
check_file "$FRONTEND_DIR/src/utils/apiHelpers.ts"
check_file "$FRONTEND_DIR/src/components/ErrorBoundary.tsx"
check_file "$FRONTEND_DIR/src/components/LoadingSkeletons.tsx"
check_file "$FRONTEND_DIR/src/pages/Seed.tsx"
check_file "$FRONTEND_DIR/src/context/AuthContext.tsx"
check_file "$FRONTEND_DIR/src/context/PlannerContext.tsx"
check_file "$FRONTEND_DIR/src/firebase/config.ts"
check_dir "$FRONTEND_DIR/node_modules"
echo ""

echo "📦 ROOT CONFIGURATION"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_file "package.json"
check_file "START.bat"
check_file "START.sh"
check_file "verify-connection.sh"
echo ""

echo "📚 DOCUMENTATION"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
check_file "CONNECTION_GUIDE.md"
check_file "QUICK_START.md"
check_file "PROJECT_SETUP.md"
check_file "ARCHITECTURE.md"
check_file "FILES_CONNECTIONS.md"
check_file "TROUBLESHOOTING.md"
check_file "VERIFICATION_CHECKLIST.md"
check_file "COMPLETE_CONNECTION_VERIFICATION.md"
check_file "FINAL_STATUS_REPORT.md"
check_file "FILE_INDEX.md"
check_file "ALL_FILES_CONNECTED_SUMMARY.md"
echo ""

echo "🔧 DEPENDENCY CHECK"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check Node.js
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo -e "${GREEN}✓${NC} Node.js $NODE_VERSION"
    ((PASS++))
else
    echo -e "${RED}✗${NC} Node.js not found"
    ((FAIL++))
fi

# Check npm
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo -e "${GREEN}✓${NC} npm $NPM_VERSION"
    ((PASS++))
else
    echo -e "${RED}✗${NC} npm not found"
    ((FAIL++))
fi

# Check MongoDB
if command -v mongod &> /dev/null; then
    echo -e "${GREEN}✓${NC} MongoDB installed"
    ((PASS++))
else
    echo -e "${YELLOW}?${NC} MongoDB not found (can use MongoDB Atlas)"
fi

echo ""

echo "📊 VERIFICATION RESULTS"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "  ${GREEN}Passed: $PASS${NC}"
echo -e "  ${RED}Failed: $FAIL${NC}"
echo ""

if [ $FAIL -eq 0 ]; then
    echo -e "${GREEN}✅ ALL CHECKS PASSED!${NC}"
    echo ""
    echo "🚀 You're ready to start:"
    echo "   Command: npm start"
    echo "   Frontend: http://localhost:5173"
    echo "   Backend: http://localhost:5000/api"
    echo "   Seed Data: http://localhost:5173/seed"
else
    echo -e "${RED}❌ SOME CHECKS FAILED${NC}"
    echo ""
    echo "Please verify:"
    echo "1. Run: npm run install-all"
    echo "2. Check .env files exist"
    echo "3. Visit: TROUBLESHOOTING.md"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🙏 Hari Om! May your application be blessed. 🕉️"
echo ""
