const express = require("express");
const router = express.Router();

const bank  = require('../controller/bank')

// post book
router.post('/bankdetails',bank.postbankdetails )



module.exports= router