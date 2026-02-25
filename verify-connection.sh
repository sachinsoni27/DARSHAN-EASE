#!/bin/bash
# DARSHAN EASE Connection Verification Script

echo "🕉️  DARSHAN EASE - Connection Verification"
echo "========================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if terminals are available
check_port() {
    if command -v lsof &> /dev/null; then
        if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null; then
            echo -e "${GREEN}✓${NC} Port $1 is available"
            return 0
        else
            echo -e "${RED}✗${NC} Port $1 is in use"
            return 1
        fi
    else
        echo -e "${YELLOW}?${NC} Cannot check port $1 (lsof not available)"
        return 2
    fi
}

# Check files exist
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} File exists: $1"
        return 0
    else
        echo -e "${RED}✗${NC} File missing: $1"
        return 1
    fi
}

# Check directory exists
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} Directory exists: $1"
        return 0
    else
        echo -e "${RED}✗${NC} Directory missing: $1"
        return 1
    fi
}

echo "📁 Checking File Structure:"
echo "---"
check_file "backend/.env"
check_file "backend/server.js"
check_file "backend/config.js"
check_file "backend/routes/templeRoutes.js"
check_file "backend/routes/foodRoutes.js"
check_file "backend/routes/hotelRoutes.js"
check_file "backend/routes/seedRoutes.js"
echo ""

echo "📁 Frontend Files:"
echo "---"
check_file "frontend/.env.local"
check_file "frontend/src/config.ts"
check_file "frontend/src/services/apiService.ts"
check_file "frontend/src/utils/apiHelpers.ts"
check_file "frontend/src/components/ErrorBoundary.tsx"
echo ""

check_dir "frontend/src/hooks"
check_dir "backend/models"
echo ""

echo "🔌 Port Availability:"
echo "---"
check_port 5000 # Backend
check_port 5173 # Frontend
echo ""

echo "📦 Dependencies:"
echo "---"
if [ -f "backend/package.json" ]; then
    if grep -q '"express"' backend/package.json; then
        echo -e "${GREEN}✓${NC} Backend dependencies configured"
    fi
fi

if [ -f "frontend/package.json" ]; then
    if grep -q '"react"' frontend/package.json; then
        echo -e "${GREEN}✓${NC} Frontend dependencies configured"
    fi
fi
echo ""

echo "✅ Verification Complete!"
echo ""
echo "📚 Next Steps:"
echo "1. Start Backend: npm run backend"
echo "2. Start Frontend: npm run frontend"
echo "3. Visit: http://localhost:5173"
echo "4. Seed Data: Navigate to /seed page"
