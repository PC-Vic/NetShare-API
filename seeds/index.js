const seedUser = require('./user-seeds');
const seedThought = require('./thoughts-seeds');

// double check this mongoose connection
const mongoose = require('mongoose');

const seedAll = async () => {
    await mongoose.connect(
        'mongodb://127.0.0.1:27017/myfirstmongooseapp'
      );
      await seedUser();
      await seedThought();
      console.log('all done!');
      process.exit(0);
};

seedAll();


