const user=require('../user.json');
 const getUser=(req,res)=>{
     
    res.status(200).json({
        success:true,
        message:user
    })
}

module.exports={getUser,}