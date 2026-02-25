const express = require('express');
const router = express.Router();
const FoodPlace = require('../models/FoodPlace');

// GET all food places
router.get('/', async (req, res) => {
    try {
        const foodPlaces = await FoodPlace.find();
        res.json(foodPlaces);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET food places by location
router.get('/location/:location', async (req, res) => {
    try {
        const foodPlaces = await FoodPlace.find({ location: req.params.location });
        res.json(foodPlaces);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one food place
router.get('/:id', async (req, res) => {
    try {
        const foodPlace = await FoodPlace.findById(req.params.id);
        if (!foodPlace) return res.status(404).json({ message: 'Food place not found' });
        res.json(foodPlace);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new food place
router.post('/', async (req, res) => {
    const foodPlace = new FoodPlace(req.body);
    try {
        const newFoodPlace = await foodPlace.save();
        res.status(201).json(newFoodPlace);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update food place
router.put('/:id', async (req, res) => {
    try {
        const foodPlace = await FoodPlace.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(foodPlace);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE food place
router.delete('/:id', async (req, res) => {
    try {
        await FoodPlace.findByIdAndDelete(req.params.id);
        res.json({ message: 'Food place deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
