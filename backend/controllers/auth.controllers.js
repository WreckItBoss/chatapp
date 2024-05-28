export const signup = async(req,res) =>{
    try {
        const {fullName, username, password, confirmpassword, gender} = req.body;
    } catch (error) {
        
    }
}

export const login = async(req,res) =>{
    console.log("login user");
}

export const logout = async(req,res) =>{
    console.log("logout");
}