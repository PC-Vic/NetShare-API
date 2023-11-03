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

// const mongoose = require('mongoose');
// const seedUser = require('./user-seeds');
// const seedThought = require('./thought-seeds');

// const dbUri = 'mongodb://root:root@localhost:27017/mongoose?authSource=admin';

// const seedAll = async () => {
//     try {
//         await mongoose.connect(dbUri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         console.log('Connected to the database.');

//         await seedUser();
//         await seedThought();

//         console.log('Seeding completed successfully.');
//     } catch (error) {
//         console.error('Error during seeding:', error);
//     } finally {
//         mongoose.disconnect(); // Close the database connection when done
//     }
// };

// seedAll();
