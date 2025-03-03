
const express=require('express')
const router=express.Router()


const{getbooks,getbooksid}=require('../Controllers/getbooks')
const{createBook}=require('../Controllers/createbooks')
const{updateBooks}=require('../Controllers/update')
const {deletebooks}=require('../Controllers/delete')



const{createUser}=require('../Controllers/createUser')
const{deleteUser}=require('../Controllers/deleteUser')
const{getuser,getuserid}=require('../Controllers/getUser')
const{updateUser}=require('../Controllers/updateUser')


router.get('/getbook',getbooks)
router.get('/getbook/:id',getbooksid)
router.post('/createbook',createBook)
router.put('/update/:id',updateBooks)
router.delete('/delete/:id',deletebooks)

router.post('/createuser',createUser)
router.get('/getuser',getuser)
router.get('/getuser/:id',getuserid)
router.put('/update/:id',updateUser)
router.delete('/delete:id',deleteUser)


module.exports=router