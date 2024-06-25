const express = require('express');
const router = express.Router();
const { Users } = require('../models');

router.get("/", async (req, res) => {
  try {
    const listOfUsers = await Users.findAll();
    res.json(listOfUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { username, password, email } = req.body; // Adjust fields as necessary
    const newUser = await Users.create({ username, password, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
