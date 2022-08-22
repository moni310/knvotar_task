
const user = require("../modles/info");

//post API for book
const postinfo = async (req, res) => {
  
  let { firstName,lasName,Email,phoneNo,password,address} =req.body

  

  try {
    if (!(firstName&&lasName&&Email&&phoneNo&&password&&address)) {
      res.status(400).json({ message: "All fields are required", status: false });
    } else {
      const getResponce = await user.create({
        firstName,lasName,Email,phoneNo,password,address
      });

      if (!getResponce) {
        res.status(400).json({ message: "information  is not created", status: false });
      } else {
        res.status(200).json({
          message: "user information is created successfully",
          data: getResponce,
          status: true,
        });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message, status: false });
  }
};




  module.exports = {postinfo}



