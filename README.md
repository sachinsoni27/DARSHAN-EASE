# 🕉️ DARSHAN EASE - Temple Discovery Platform

> Connect with the Divine | Discover Temples | Plan Your Pilgrimage

[![Live Demo](https://img.shields.io/badge/Demo-Live-success)](https://darshan-ease-9xqrek4ey-sachin-sonis-projects.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61dafb?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-13aa52?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

---

## 📖 About DARSHAN EASE

DARSHAN EASE is a comprehensive web application designed to help devotees discover temples, explore sacred destinations, and plan their spiritual journeys seamlessly. Whether you're looking for ancient temples, specific deities, local cuisine, accommodations, or pilgrimage guidance, DARSHAN EASE makes it all easy and accessible.

**Darshan** (दर्शन) means "the sight or vision of the divine," and DARSHAN EASE simplifies this sacred experience for modern pilgrims.

## ✨ Key Features

### 🏛️ Temple Discovery
- Search temples by name, location, or deity
- View detailed temple information (history, timings, festivals)
- Explore coordinates and navigation
- Browse special events and festivities

### 🗺️ Smart Trip Planning
- Plan multi-temple pilgrimage routes
- Organize temple visits with custom itineraries
- Save favorite temples and trips

### 🍽️ Food Discovery
- Find local and traditional cuisine near temples
- Filter by cuisine type and location
- Discover prasad (sacred offerings)

### 🏨 Accommodation Search
- Find hotels and lodges near temples
- Filter by category and price range
- View amenities and contact information

### 📍 Map View
- Interactive map with temple locations
- Hotel and food place markers
- Navigate to destinations

### ✍️ Community Feedback
- Share travel experiences
- Rate temples and services
- Community-driven insights

## 🛠️ Tech Stack

- **Frontend**: React 18+ with TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js + Express.js + MongoDB
- **Authentication**: Firebase
- **Deployment**: Vercel (Frontend), Cloud (Backend)

## 🚀 Live Demo

Visit the live application: **[darshan-ease.vercel.app](https://darshan-ease-9xqrek4ey-sachin-sonis-projects.vercel.app/)**

## 💻 Get Started

### Quick Setup (5 minutes)

```bash
# Clone the repository
git clone https://github.com/sachinsoni27/DarshanEase.git
cd DarshanEase

# Install all dependencies
npm run install-all

# Configure environment variables
# Create backend/.env and frontend/.env.local (see GETTING_STARTED.md)

# Start the application
npm start
```

Access the application:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000/api
- **Seed Page**: http://localhost:5173/seed

See [GETTING_STARTED.md](GETTING_STARTED.md) for detailed setup instructions.

## 📚 Documentation

Comprehensive documentation is available:

| Document | Purpose |
|----------|---------|
| [DOCUMENTATION.md](DOCUMENTATION.md) | 📚 Complete documentation index |
| [GETTING_STARTED.md](GETTING_STARTED.md) | 🚀 Installation and setup guide |
| [FEATURES.md](FEATURES.md) | ✨ Detailed feature overview |
| [API_DOCUMENTATION.md](API_DOCUMENTATION.md) | 📡 Backend API reference |
| [ARCHITECTURE.md](ARCHITECTURE.md) | 🏗️ System architecture and design |
| [DEPLOYMENT.md](DEPLOYMENT.md) | 🚢 Deployment and hosting guide |
| [CONTRIBUTING.md](CONTRIBUTING.md) | 🤝 Contribution guidelines |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md) | 🔧 Common issues and solutions |

## 🏗️ Project Structure

```
DarshanEase/
├── frontend/                 # React + TypeScript frontend
│   ├── src/
│   │   ├── pages/           # Route pages (Home, Temples, Food, Hotels, etc.)
│   │   ├── components/      # Reusable UI components
│   │   ├── context/         # State management
│   │   ├── services/        # API service layer
│   │   └── firebase/        # Firebase authentication
│   └── package.json
│
├── backend/                  # Node.js + Express backend
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── seed/                # Database seed data
│   └── server.js            # Main server
│
└── Documentation Files
    ├── README.md
    ├── GETTING_STARTED.md
    ├── FEATURES.md
    └── [Other guides]
```

## 🔄 Data Models

### Temple
```javascript
{
  name: String,
  location: String,
  description: String,
  deity: String,
  coordinates: { latitude, longitude },
  timings: { opening, closing },
  festivals: [String]
}
```

### FoodPlace
```javascript
{
  name: String,
  cuisine: String,
  location: String,
  coordinates: { latitude, longitude },
  priceRange: String
}
```

### Hotel
```javascript
{
  name: String,
  category: String,
  address: String,
  coordinates: { latitude, longitude },
  pricePerNight: Number
}
```

## 🧪 API Endpoints

### Temples
```bash
GET  /api/temples              # Get all temples
GET  /api/temples/:id          # Get specific temple
POST /api/temples              # Create temple
```

### Food Places
```bash
GET  /api/food                 # Get all food places
GET  /api/food/location/:loc   # Get food by location
POST /api/food                 # Create food place
```

### Hotels
```bash
GET  /api/hotels               # Get all hotels
GET  /api/hotels/location/:loc # Get hotels by location
POST /api/hotels               # Create hotel
```

### Database Seeding
```bash
POST /api/seed/temples         # Seed temple data
POST /api/seed/food            # Seed food data
POST /api/seed/hotels          # Seed hotel data
GET  /api/seed/status          # Get seed status
```

See [API_DOCUMENTATION.md](API_DOCUMENTATION.md) for complete API reference.

## 🧪 Testing

```bash
# Test individual components
npm run backend
npm run frontend

# Seed database
curl -X POST http://localhost:5000/api/seed/temples

# Test API endpoints
curl http://localhost:5000/api/temples
```

## 🚢 Deployment

### Frontend (Vercel)
- Automatically deployed on push to main branch
- Live at: [darshan-ease.vercel.app](https://darshan-ease-9xqrek4ey-sachin-sonis-projects.vercel.app/)

### Backend
- Deploy to Heroku, Railway, or your preferred platform
- See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions

## 🎯 Features Roadmap

### Current (v1.0)
- ✅ Temple discovery and details
- ✅ Food place directory
- ✅ Hotel finder
- ✅ Trip planning
- ✅ Map view
- ✅ Feedback system
- ✅ User authentication

### Future Enhancements
- [ ] AI-powered recommendations
- [ ] Virtual temple tours
- [ ] Multi-language support
- [ ] Offline mode
- [ ] Advanced analytics

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Development setup
- Coding standards
- Commit conventions
- Pull request process

## �‍💼 Team

- **Sachin Soni** -Core Contributor
- **Sakshi Singh** - Core Contributor
- **Satish Kumar** -  Lead Developer

## 📞 Support & Contact

- **Email**: sachinsoniofficial2003@gmail.com
- **Phone**: 9936503035
- **GitHub**: [GitHub Repository](https://github.com/sachinsoni27/DarshanEase)
- **Issues**: Report bugs and request features
- **Documentation**: Check [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common issues

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## ✨ Credits

**DARSHAN EASE** is created and maintained by **Sachin Soni**, **Sakshi Singh**, and **Satish Kumar** with support from the open-source community.

## 🙏 Gratitude

> "दर्शन" - The sight or vision of the divine
> 
> DARSHAN EASE aims to make this sacred experience accessible to all devotees.

---

**Last Updated**: February 25, 2026  
**Version**: 1.0.0  
**Status**: ✅ Active & Maintained

© 2026 DARSHAN EASE. All rights reserved.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Developer

**Sachin Soni**
- LinkedIn: [sachin-soni](https://www.linkedin.com/in/sachin-soni-82539036a/)
- Instagram: [@__sachin_soni__](https://www.instagram.com/__sachin_soni__/)
- Twitter/X: [@__sachin_soni__](https://x.com/__sachin_soni__)
- Email: sachinsoniofficial2003@gmail.com
- Phone: 9936503035

## 🙏 Acknowledgments

- Built with modern web technologies
- Built with Vercel's excellent platform
- Inspired by the need to make spiritual journeys more accessible

---

⭐ If you find this project helpful, please consider giving it a star!

**Status**: 🚧 Active Development | Regular updates and improvements

**Contact Address**: Delhi-NCR, Ghaziabad-Meerut Road, Ghaziabad (201206), Uttar Pradesh, India
**Phone**: 9936503035
**Email**: sachinsoniofficial2003@gmail.com
