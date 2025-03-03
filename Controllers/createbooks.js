


const Book=require('../models/books')



exports.createBook=async(req,res)=>{


    try {


        const{name,description,price,stocks,category}=req.body;

        const response=await Book.create({name,description,price,stocks,category})
        

        res.status(200).json({
            success:true,
            message:"book created ",
            data:response
        })
        
    } catch (error) {
        
        console.log(error)

        res.status(500).json({
          success:false,
          message:"book not created",
          data:error
        })
    }
}

