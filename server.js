const mongoose = require("mongoose");
const express = require('express')
const app = express()
const book = require("./routes/book")
const User=require("./routes/user")
const auth = require("./middleware/auth");

app.use(express.json())

const port = 3000


mongoose
  .connect(
    `mongodb+srv://rubi:rubi@cluster0.264g2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    }
  )
  .then(() => console.log("mongodb connected..."))
  .catch((err) => console.log(err));


app.use("/api",auth,book);
app.use("/user",User)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



