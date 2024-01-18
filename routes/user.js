const router = require('express').Router();
const Users = require('../models/user');

router.route('/', (req, res) => {
    Users.find()
    .then(user => res.json(user))
    .catch((err)=> res.status(400).json("Error:", err))
})



module.exports = router;