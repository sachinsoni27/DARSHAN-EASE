const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// GET all hotels
router.get('/', async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET hotels by location (nearby temples)
router.get('/location/:location', async (req, res) => {
    try {
        const hotels = await Hotel.find({ address: { $regex: req.params.location, $options: 'i' } });
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one hotel
router.get('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
        res.json(hotel);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new hotel
router.post('/', async (req, res) => {
    const hotel = new Hotel(req.body);
    try {
        const newHotel = await hotel.save();
        res.status(201).json(newHotel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update hotel
router.put('/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(hotel);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE hotel
router.delete('/:id', async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.json({ message: 'Hotel deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
