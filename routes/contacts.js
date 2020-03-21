const express = require("express");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");

const router = express.Router();

// @route   GET  /api/contacts
// @desc    Gets all users
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET  /api/contacts/:id
// @desc    Gets a contact
// @access  Private
router.get("/:id", (req, res) => {
  res.send("Get a contact");
});

// @route   POST  /api/contacts
// @desc    Add a contact
// @access  Private
router.post("/", [auth, [
  check("name", "Please add name").notEmpty()
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {name, email, phone, type} = req.body;

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
      user:req.user.id
    })
    const contact = await newContact.save();
    res.json(contact)
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT  /api/contacts/:id
// @desc    Updates contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update a contact");
});

// @route   DELETE  /api/contacts/:id
// @desc    Delete contact
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Delete a contact");
});

module.exports = router;
