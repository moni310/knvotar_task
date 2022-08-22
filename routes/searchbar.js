const express = require("express");
const router = express.Router();

const searchText  = require('../controller/searchbar')

// post book
router.get("/get/Searchbar/:searchText",searchText.Searchbar)


module.exports= router
