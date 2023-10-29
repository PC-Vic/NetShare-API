const seedUser = require('./user-seeds');
const seedThought = require('./thought-seeds');

// double check this mongoose connection
const mongoose = require('mongoose');

const seedAll = async () => {
    await mongoose.connect(
        "mongodb://root:root@localhost:27017/mongoose?authSource=admin"
      );
      await seedUser();
      await seedThought();
      console.log('all done!');
      process.exit(0);
};

seedAll();