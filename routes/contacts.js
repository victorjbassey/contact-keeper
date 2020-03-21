const express = require("express");
const router = express.Router();

// @route   GET  /api/contacts
// @desc    Gets all users
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all users");
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
router.post("/", (req, res) => {
  res.send("Add new contact");
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
