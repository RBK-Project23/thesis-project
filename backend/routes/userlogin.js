const express= require("express");
const router= express.Router();
const { register,login, deleteUser, getuser, updateStatus}=require('../controllers/userController')


router.post("/register",register);
router.post('/login',login);
router.delete('/delete/:id', deleteUser);
router.get('/getuser',getuser);
router.post('/updatestatus', updateStatus)




module.exports=router