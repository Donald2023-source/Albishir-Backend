const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const router  = express.Router();


router.post('/empowerment/signUp', async (req, res) => {
    console.log('Received request body:', req.body);
    const { firstName, lastName, accountNumber, accountName, bankName, phoneNumber, gender } = req.body;
  
    if (!firstName || !lastName || !accountNumber || !accountName || !bankName || !phoneNumber || !gender) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const newUser = new User({
        firstName,
        lastName,
        accountName,
        accountNumber,
        bankName,
        phoneNumber,
        gender
      });
  
      await newUser.save();
      return res.status(201).json({ message: 'Sign Up successful' });
    } catch (err) {
      console.error('Error:', err);
      return res.status(500).json({ message: 'Internal server error', error: err.message });
    }
  });

  router.post('/trainees/signUp', async (req, res) => {
    console.log('Received request body:', req.body);
    const { firstName, lastName, phoneNumber, gender } = req.body;
  
    if (!firstName || !lastName || !phoneNumber || !gender) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const newUser = new User({
        firstName,
        lastName,
        phoneNumber,
        gender
      });
  
      await newUser.save();
      return res.status(201).json({ message: 'Sign Up successful' });
    } catch (err) {
      console.error('Error:', err);
      return res.status(500).json({ message: 'Internal server error', error: err.message });
    }
  });

module.exports = router
