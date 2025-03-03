
const express=require('express')
const app=express()

require('dotenv').config()

const Port=process.env.PORT || 4000


app.use(express.json())


const connectDb=require('./Config/database')
connectDb()

const routes=require('./Routes/allroutes')

app.use('/api/v1',routes)


app.listen(Port,()=>{
    console.log('server created successfully')
})

