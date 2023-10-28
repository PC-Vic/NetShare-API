const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema({
  reactionText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
});

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => {
      // Use a getter method to format the timestamp on query
      return new Date(timestamp).toLocaleString();
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

// Define a virtual field to calculate the reaction count
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
