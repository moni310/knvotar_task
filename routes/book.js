const express = require("express");
const router = express.Router();

const book = require("../controller/book");
const auth =require("../middleware/auth")


// post book
router.post("/create/book",auth,book.postBook);

//get book

router.get("/get/book",auth,book.getBook)

//get Authers
router.get("/get/author/:auth",auth,book.getBookbyauthor)

//patch api for book
router.patch("/update/book/:id",auth,book.UpdateBook )

//Delete api --

router.delete("/delete/book/:id",auth,book.deleteBook)


module.exports= router
