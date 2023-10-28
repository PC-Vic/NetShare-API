const router = require("express").Router();
const { Thought } = require("../../models");

// Route to get all thoughts
router.get("/thoughts", async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// route to create a new thought
router.post("/thoughts", async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    res.status(201).json(newThought);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// route to get a single thought by ID
router.get("/thoughts/:thoughtId", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(thought);
  } catch (err) {
    console.error(500).json(err);
  }
});

// Route to update thought by ID
router.get("/thoughts/:thoughtId", async (res, req) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      req.body,
      { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(updatedThought);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Route to delete a thought by its ID
router.delete("/thoughts/:thoughtId", async (req, res) => {
  try {
    const deletedThought = await Thought.findByIdAndDelete(
      req.params.thoughtId
    );
    if (!deletedThought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.json(deletedThought);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
