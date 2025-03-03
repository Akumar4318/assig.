


const Book=require('../models/books')



exports.updateBooks=async(req,res)=>{


    try {

            const{id}=req.params
        const{name,description,price,stocks,category}=req.body;

        const response=await Book.findByIdAndUpdate({_id:id},{name,description,price,stocks,category})
        

        res.status(200).json({
            success:true,
            message:"book updated ",
            data:response
        })
        
    } catch (error) {
        
        console.log(error)

        res.status(500).json({
          success:false,
          message:"book not updated",
          data:error
        })
    }
}

