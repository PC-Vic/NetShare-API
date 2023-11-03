const Thought = require('../models/Thought');

const thoughtData = [
  {
    thoughtText: 'This is a sample thought.',
    username: 'user1',
    reactions: [
      {
        reactionText: 'I agree!',
        username: 'user2',
      },
      {
        reactionText: 'That is interesting thought.',
        username: 'user3',
      },
    ],
  },
  {
    thoughtText: 'Here is another great thought',
    username: 'user2',
    reactions: [
      {
        reactionText: 'Well said!',
        username: 'user1',
      },
    ],
  },
  // I will add more thoughts here later if needed
];

// Seeds the database with thought data
const seedThoughts = async () => {
  try {
    await Thought.deleteMany(); // Clear existing thought data
    await Thought.insertMany(thoughtData); // Insert new thought data
    console.log('Thoughts seeded successfully');
  } catch (err) {
    console.error('Error seeding thoughts:', err);
  }
};

seedThoughts();
