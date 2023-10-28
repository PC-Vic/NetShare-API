const router = require('express').Router();
const { Thought } = require('../../models');

// Route to get all thoughts
router.get('/thoughts', async (req, res) => {
    try{
        const thoughts = await Thought.find();
        res.json(thoughts); 
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// route to create a new thought
router.post('/thoughts', async (req, res) => {
    try{
        const newThought = await Thought.create(req.body);
        res.status(201).json(newThought);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

// route to get a single thought by ID
router.get('/thoughts/:thoughtId', async (req, res) => {
    try{
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
    } catch (err) {
        console.error(500).json(err);
    }
});