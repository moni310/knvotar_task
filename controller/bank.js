const Bank = require("../modles/bank");
const bcrypt=require('bcryptjs'); 
//post API for book
const postbankdetails = async (req, res) => {
  
  let { bankName,
  bankIFSCCode,
  branch,
  accountNo} =req.body

  
  try {
    if (!(bankName&&
        bankIFSCCode&&
        branch&&
        accountNo)) {
      res.status(400).json({ message: "All fields are required", status: false });
    } else {
      const salt= await bcrypt.genSalt(10)
      bankName=await bcrypt.hash(bankName,salt);
      bankIFSCCode=await bcrypt.hash( bankIFSCCode,salt);
      branch=await bcrypt.hash( branch,salt);
      accountNo=await bcrypt.hash(accountNo,salt);
     


      const newdata= {bankName:bankName,bankIFSCCode:bankIFSCCode,branch:branch,accountNo:accountNo}

      
      const data= await Bank.create(newdata)
      return res.status(200).send(data)

    }
  } catch (error) {
    res.status(400).json({ message: error.message, status: false });
  }
};


  module.exports = {postbankdetails}