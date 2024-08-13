  const express = require('express');
  const dotenv = require('dotenv');
  const cors = require('cors');
  const cookieParser = require('cookie-parser');
  const authRoutes = require('./routes/authRoutes');
  const mongoose = require('mongoose');

  dotenv.config();
  const app = express();
  const PORT = process.env.PORT || 3000; // Default port if PORT is not set

  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  mongoose.connect('mongodb+srv://donalddyusuf:bAzi8s5RMq3QmUBF@registeration.pqcuk.mongodb.net/?retryWrites=true&w=majority', {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });


  app.use('/api/auth', authRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
