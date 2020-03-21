const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();

// @route   POST  /api/users
// @desc    Registers a user
// @access  Public
router.post(
  "/",
  [
    check("name", "Please add name").notEmpty(),
    check("email", "Please use a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("passed");
  }
);

module.exports = router;
