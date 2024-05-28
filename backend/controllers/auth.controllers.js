import User from "../models/user.model.js";

export const signup = async(req,res) =>{
    try {
        const {fullName, username, password, confirmpassword, gender} = req.body;

        if(password!=confirmPassword){
            return res.status(400).json({error:"Password doesn't match"});
        }
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        //hashing password
        //profile pic selector https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=Scott`
    } catch (error) {
        
    }
}

export const login = async(req,res) =>{
    console.log("login user");
}

export const logout = async(req,res) =>{
    console.log("logout");
}