import User from '../models/User.js'


//create new tour
export const createUser = async (req,res)=>{
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save();
        res
        .status(200)
        .json({
            succees:true,
            message:"Successfully created",
            data:savedUser,
        });
    }catch(err){
        res.status(500)
        .json({ succees:false,message:"failed to create. try again"});
    }
};

//update tour
export const updateUser = async(req,res)=>{
    const id=req.params.id

    try{
      const updatedUser = await User.findByIdAndUpdate(id,{
        $set:req.body
    },{new:true})
    res
        .status(200)
        .json({
            succees:true,
            message:"Successfully updated",
            data:updatedUser,
        });
    }catch(err){
        res.status(500)
        .json({ succees:false,message:"failed to update. try again"});
    }
};
export const deleteUser = async(req,res)=>{
    const id=req.params.id

    try{
      await User.findByIdAndDelete(id)
    res
        .status(200)
        .json({
            succees:true,
            message:"Successfully deleted",
        });
    }catch(err){
        res.status(500)
        .json({ succees:false,message:"failed to delete. try again"});
    }
};
export const getSingleUser = async(req,res)=>{
    const id=req.params.id

    try{
     const users =  await User.findById(id);
    res
        .status(200)
        .json({
            succees:true,
            message:"Successfull",
            data:users
        });
    }catch(err){
        res.status(404)
        .json({ succees:false,message:"not found "});
    }
};
export const getAllUser = async(req,res)=>{
    
    try{
        const users = await User.find({})

        res.status(200).json({success:true,
        message:"Successfull",
        data:users
        });
    }catch(err){
        res.status(404)
        .json({ success:false,message:"not found "});
    }
}; 
