const express = require('express');
const db = require('./config/connection');
const userRoutes = require('./routes/api/user-routes');
const thoughtRoutes = require('./routes/api/thoughts-routes');
const { Thought, User } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

