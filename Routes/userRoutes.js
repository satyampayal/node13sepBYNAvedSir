const  { Router } =require( "express");
const { getUser } =require ("../Controller/userController.js");
const router=Router()

router.get('/get',getUser)
module.exports= router

