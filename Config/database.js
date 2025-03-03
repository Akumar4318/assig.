const mongoose=require('mongoose')

require("dotenv").config()

const connectDB= ()=>{

    mongoose.connect(process.env.DATABASE_URL)
    .then(
        console.log("db connected successfully")
    )
    .catch((e)=>{
        console.log(e)
        console.log('error while connecting the database')
        process.exit(1)
    })
}

module.exports=connectDB