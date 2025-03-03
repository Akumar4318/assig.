


const User=require('../models/customer')



exports.deleteUser=async(req,res)=>{


    try {

            const{id}=req.params
        // const{name,description,price,stocks,category}=req.body;

        // const response=await Book.findByIdAndUpdate({_id:id},{name,description,price,stocks,category})
        const response=await User.findByIdAndDelete({_id:id})
        

        res.status(200).json({
            success:true,
            message:"user deleted ",
            data:response
        })
        
    } catch (error) {
        
        console.log(error)

        res.status(500).json({
          success:false,
          message:"user not deleted",
          data:error
        })
    }
}

