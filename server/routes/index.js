
const express = require('express');
const router = express.Router();
const app = express();

// import usersController from 'd:/minor project/server/controllers/users_controller.js';

const usersController = require("../controllers/users_controller.js")


// Route to handle signup form submission

router.post('/signup', usersController.create); // go to usersController and run create method

module.exports = router;
