const user= require("../modles/info")

// firstName,lasName,Email,phoneNo,password,address
const Searchbar = async (req,res)=>{
    let {searchText}=req.params;
    try{
      if (!searchText) {
        res.json({ message: "Enter the valid name", status: false });
      } else {
        let firstName = await user.find({
          Name: { $regex: searchText, $options: "i" },
        });
        let lastName = await user.find({
          Name1: { $regex: searchText, $options: "i" },
        });
        
        let email = await user.find({
          Email: { $regex: searchText, $options: "i" },
        });
  
        let phoneNo = await user.find({
          Phone: { $regex: searchText, $options: "i" },
        });
  
  let result = firstName.concat( lastName, email, phoneNo);
  res.json(result)
  } 
    }
  catch(error){
    res.send({message:error.message, status:false})
  }
  }

  module.exports={Searchbar}