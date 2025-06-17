export const protect = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader?.startsWith("Bearer")){
        return res.status(401).json({error:"Access denied, no token"});
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
       // req.user = decoded; <--------------this is not need input async on the arrorw function
        req.user = await User.findById(decoded.id).select("-password");//<---------input async on the arrorw function
        next();
    } catch (error) {
        return res.status(403).json({error:"Invalid token"});
    };
};

export const authorizeRoles = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({error:"Access denied : insufficient role"});
        }
        next();
    };
};

export const isAdmin = (req,res,next)=>{
    if(req.user && req.user.role === "admin"){
        next();
    }else{
        res.status(403).json({error:"Admin access required"});
    }
};

export const isSelfOrAdmin = (req,res,next)=>{
    if(req.user && (req.user.role === "admin" || req.user._id.toString() === req.params.id)){
        next();
    }else{
        res.status(403).json({error:"Not authorized to update this user"});
    }
};