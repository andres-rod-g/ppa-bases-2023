const express = require('express');
const router = express.Router();

// Import your route handlers
const { Create } = require('./usuarios/create');
const { Remove } = require('./usuarios/remove');
const GetUser = require('./usuarios/get');
const GetAllUsers = require('./usuarios/getAll');
const GetAllLogs = require('./logs/getAll');

// Define routes
router.get('/other', (req, res) => {
    return
});

// Users
router.get("/user", GetUser)
router.post("/user", Create)
router.delete("/user", Remove)

router.get("/users", GetAllUsers)

// Logs
router.get("/logs", GetAllLogs)

module.exports = router;
