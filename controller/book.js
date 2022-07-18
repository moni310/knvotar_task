const book = require("../modles/book");
const books = require("../modles/book");

//post API for book

const postBook = async (req, res) => {
    let { bookName, bookPrize, Authorname, Createdby} = req.body;
  
    try {
      if (!(bookName && bookPrize &&  Authorname && Createdby)) {
        res.json({ message: "All fields are required", status: false });
      } else {
        const book = await books.create({
          bookName,
          bookPrize,
          Authorname,
          Createdby,
          time:Date.now()
         
        });
  
        if (!book) {
          res.json({ message: "books is not created", status: false });
        } else {
          res.json({
            message: "books is created successfully",
            data: book,
            status: true,
          });
        }
      }
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };


//getAll books

const getBook = async (req, res) => {
    let page = (req.query.page*10)-10
    try {
      const book = await books.find().limit(10).skip(page);
      if (!book) {
        res.json({ message: "there is no book", status: false });
      }
      res.json({
        message: "Found the Books details ",
        data: book,
        status: true,
      });
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };
  
//get book by Authore name

const getBookbyauthor = async (req, res) => {
  let page = (req.query.page*10)-10
  let auther = req.query.auther
  try {
    const book = await books.findOne({Author_name:auther}).limit(10).skip(page);
    if (!book) {
      res.json({ message: "Enter the correct id", status: false });
    }
    // res.json(admin)
    res.json({
      message: "user is found the Books details ",
      data: book,
      status: true,
    });
  } catch (error) {
    res.json({ message: error.message, status: false });
  }
};




//patch api  for book

const UpdateBook = async (req, res) => {
    let { bookName, bookPrize, Authorname} = req.body;
    try {
      const book = await books.findOneAndUpdate({ id: req.params.id }
        , {bookName, bookPrize, Authorname});
      if (!book) {
        res.json({ message: "Enter the correct id", status: false });
      } else {
        res.json({
          message: "Book has updated successsfully",
          data: book,
          status: true,
        });
      }
    } catch (error) {
      res.json({ message: error.message, status: false });
    }
  };
  

//Delete api 

const deleteBook = async (req, res) => {
    try {
      const book = await books.findOneAndDelete({ id: req.params.id });
      if (!book) {
        res.json({ message: "Enter the correct id", status: false });
      } else {
        res.send({ message: "Books has deleted successfully", status: true });
      }
    } catch (error) {
      res.send({ message: error.message, status: false });
    }
  };
  
  module.exports = {
    postBook,
    getBook,
    getBookbyauthor,
    UpdateBook ,
    deleteBook

  }



