


const User=require('../models/customer')



exports.updateUser=async(req,res)=>{


    try {

            const{id}=req.params
        const{fullName,email,phone,address,registeredAt}=req.body;

        const response=await User.findByIdAndUpdate({_id:id},{fullName,email,phone,address,registeredAt})
        

        res.status(200).json({
            success:true,
            message:"User updated ",
            data:response
        })
        
    } catch (error) {
        
        console.log(error)

        res.status(500).json({
          success:false,
          message:"User not updated",
          data:error
        })
    }
}

