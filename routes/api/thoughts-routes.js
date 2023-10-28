const router = require('express').Router();
const { Thought } = require('../../models');

router.get('/thoughts', async (req, res) => {
    try{
        const thoughts = await Thought.find();
        res.json(thoughts); 
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});