const connection = require('../config/connection');
const User = require("../models/users");

const userData = [
  {
    username: "user1",
    email: "user1@abcemail.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "user2",
    email: "user2@abcemail.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "user3",
    email: "user3@abcemail.com",
    thoughts: [],
    friends: [],
  },
];

// seeds the database with user data
const seedUsers = async () => {
  try {
    await User.deleteMany(); // Clear existing user data
    await User.insertMany(userData); // Insert new user data
    console.log("Users seeded successfully");
  } catch (err) {
    console.error("Error seeding users:", err);
  }
};

module.exports = seedUsers;
