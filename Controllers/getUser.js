
const User=require('../models/customer')



exports.getuser=async(req,res)=>{


    try {

        const response= await User.find({})

        res.status(200).json({
            success:true,
            message:"User found",
            data:response
        })
        
    } catch (error) {
        
        console.log(error)

        res.status(500).json({
          success:false,
          message:"User not found",
          data:error
        })
    }
}




exports.getuserid=async(req,res)=>{


    try {

       const {id}=req.params;

       const response=await User.findById({_id:id})

        res.status(200).json({
            success:true,
            message:"User found",
            data:response
        })
        
    } catch (error) {
        
        console.log(error)

        res.status(500).json({
          success:false,
          message:"User not found",
          data:error
        })
    }
}

