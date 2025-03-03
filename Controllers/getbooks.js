
const Book=require('../models/books')



exports.getbooks=async(req,res)=>{


    try {

        const response= await Book.find({})

        res.status(200).json({
            success:true,
            message:"book found",
            data:response
        })
        
    } catch (error) {
        
        console.log(error)

        res.status(500).json({
          success:false,
          message:"book not found",
          data:error
        })
    }
}




exports.getbooksid=async(req,res)=>{


    try {

       const {id}=req.params;

       const response=await Book.findById({_id:id})

        res.status(200).json({
            success:true,
            message:"book found",
            data:response
        })
        
    } catch (error) {
        
        console.log(error)

        res.status(500).json({
          success:false,
          message:"book not found",
          data:error
        })
    }
}

