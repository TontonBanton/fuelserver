const express = require('express');
const router = express.Router();
const { Users } = require('../models');;
router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post("/", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const newUser = await Users.create({ username, password, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
