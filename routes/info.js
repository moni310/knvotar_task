const express = require("express");
const router = express.Router();

const details  = require('../controller/info')

// post book
router.post('/info',details.postinfo )



module.exports= router
