


const User=require('../models/customer')



exports.createUser=async(req,res)=>{


    try {


        const{fullName,email,phone,address,registeredAt}=req.body;

        const response=await User.create({fullName,email,phone,address,registeredAt})
        

        res.status(200).json({
            success:true,
            message:"User created ",
            data:response
        })
        
    } catch (error) {
        
        console.log(error)

        res.status(500).json({
          success:false,
          message:"user not created",
          data:error
        })
    }
}

