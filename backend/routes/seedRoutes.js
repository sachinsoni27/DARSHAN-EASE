const express = require('express');
const router = express.Router();
const Temple = require('../models/Temple');
const FoodPlace = require('../models/FoodPlace');
const Hotel = require('../models/Hotel');

// Seed temples data
router.post('/temples', async (req, res) => {
    try {
        // Clear existing temples
        await Temple.deleteMany({});

        const temples = [
            {
                name: "Banke Bihari Temple",
                location: "Vrindavan",
                description: "The holiest and most famous temple of Lord Krishna in the world.",
                history: "Established by Swami Haridas, the guru of Tansen.",
                timings: "07:45 AM - 12:00 PM, 05:30 PM - 09:30 PM",
                aartiTimings: "Shringar: 08:00 AM, Rajbhog: 12:00 PM, Shayan: 09:30 PM",
                entryRules: "No photography inside.",
                bestTime: "Holi, Janmashtami",
                festivals: ["Holi", "Janmashtami", "Jhulan Yatra"],
                latitude: 27.5802,
                longitude: 77.7032
            },
            {
                name: "Prem Mandir",
                location: "Vrindavan",
                description: "A monument of divine love, Prem Mandir is a massive temple made of white marble.",
                history: "Construction began in 2001 and completed in 2012 by Jagadguru Kripalu Maharaj.",
                timings: "05:30 AM - 12:00 PM, 04:30 PM - 08:30 PM",
                aartiTimings: "Morning: 05:30 AM, Evening: 04:30 PM",
                entryRules: "Free entry.",
                bestTime: "Evening for light show",
                festivals: ["Radhashtami", "Janmashtami"],
                latitude: 27.5724,
                longitude: 77.6749
            }
        ];

        const savedTemples = await Temple.insertMany(temples);
        res.status(201).json({ message: 'Temples seeded successfully', count: savedTemples.length });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed food places data
router.post('/food', async (req, res) => {
    try {
        // Clear existing food places
        await FoodPlace.deleteMany({});

        const foodPlaces = [
            {
                name: "Brijwasi Sweets",
                type: "Restaurant",
                cuisine: ["North Indian", "Sweets"],
                address: "Loi Bazaar, Vrindavan",
                location: "Near Banke Bihari",
                openingHours: "06:00 AM - 10:00 PM",
                priceRange: "$$",
                isVeg: true,
                coordinates: { lat: 27.5805, lng: 77.7035 }
            },
            {
                name: "Mathura Peda Point",
                type: "Street Food",
                cuisine: ["Sweets", "Snacks"],
                address: "Main Bazaar, Mathura",
                location: "Near Krishna Janmabhoomi",
                openingHours: "07:00 AM - 09:00 PM",
                priceRange: "$",
                isVeg: true,
                coordinates: { lat: 27.4969, lng: 77.6729 }
            }
        ];

        const savedFoodPlaces = await FoodPlace.insertMany(foodPlaces);
        res.status(201).json({ message: 'Food places seeded successfully', count: savedFoodPlaces.length });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed hotels data
router.post('/hotels', async (req, res) => {
    try {
        // Clear existing hotels
        await Hotel.deleteMany({});

        const hotels = [
            {
                name: "Vrindavan Dharmshala",
                category: "Dharamshala",
                address: "Loi Bazaar, Vrindavan",
                priceRange: "₹500 - ₹1000",
                amenities: ["Basic Rooms", "Common Kitchen", "Free WiFi"],
                contact: "+91-9876543210",
                coordinates: { lat: 27.5802, lng: 77.7032 }
            },
            {
                name: "Radhika Resort",
                category: "Premium",
                address: "Parikrama Marg, Vrindavan",
                priceRange: "₹2000 - ₹5000",
                amenities: ["AC Rooms", "Restaurant", "WiFi", "Parking", "Pool"],
                contact: "+91-9876543211",
                coordinates: { lat: 27.5724, lng: 77.6749 }
            }
        ];

        const savedHotels = await Hotel.insertMany(hotels);
        res.status(201).json({ message: 'Hotels seeded successfully', count: savedHotels.length });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET seed status
router.get('/status', async (req, res) => {
    try {
        const templeCount = await Temple.countDocuments();
        const foodCount = await FoodPlace.countDocuments();
        const hotelCount = await Hotel.countDocuments();
        
        res.json({
            temples: templeCount,
            foodPlaces: foodCount,
            hotels: hotelCount
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
