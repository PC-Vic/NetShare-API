const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await require('./config/connection'); // Require the database connection module
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();