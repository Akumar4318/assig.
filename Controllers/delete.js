


const Book=require('../models/books')



exports.deletebooks=async(req,res)=>{


    try {

            const{id}=req.params
        // const{name,description,price,stocks,category}=req.body;

        // const response=await Book.findByIdAndUpdate({_id:id},{name,description,price,stocks,category})
        const response=await Book.findByIdAndDelete({_id:id})
        

        res.status(200).json({
            success:true,
            message:"book deleted ",
            data:response
        })
        
    } catch (error) {
        
        console.log(error)

        res.status(500).json({
          success:false,
          message:"book not deleted",
          data:error
        })
    }
}

