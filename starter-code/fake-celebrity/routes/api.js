const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt         = require("bcryptjs");
const bcryptSalt     = 10;
const passport = require('passport');






module.exports = router
