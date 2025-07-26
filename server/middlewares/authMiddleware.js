import jwt from "jsonwebtoken";
import User from '../models/userModel.js';
export const protect = async (req, res, next) => {

    const authHeader = req.headers.authorization;
     console.log("Received Auth Header:", authHeader);
    if (!authHeader?.startsWith("Bearer")) {
        return res.status(401).json({ error: "Access denied, no token" });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.user = decoded; <----this is not need input async on the arrorw function
        req.user = await User.findById(decoded.id).select("-password");//<---input async on the arrorw function
        if (!req.user) {
            return res.status(401).json({ error: "User not found in database" });
        }
        console.log("Authenticated User:", {
            id: req.user._id,
            name: req.user.name,
            role: req.user.role,
        });
        next();
    } catch (error) {
         console.error("Token verification error:", error.message);
        return res.status(403).json({ error: "Invalid token" });
    };
};

export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: "Access denied : insufficient role" });
        }
        next();
    };
};

export const isSuperAdmin = (req, res, next) => {
    if (req.user && req.user.role === "superadmin" ) {
        console.log("Super admin verified:", req.user.name);
        next();
    } else {
        console.warn("Super admin access denied for:", req.user?.name || "Unknown");
        res.status(403).json({ error: "Super admin access required" });
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user && (req.user.role === "superadmin" || req.user.role === "admin")) {
        console.log("Admin verified:", req.user.name);
        next();
    } else {
        console.warn("Admin access denied for:", req.user?.name || "Unknown");
        res.status(403).json({ error: "Admin access required" });
    }
};

export const isAssistant = (req, res, next) => {
    if (req.user && (req.user.role === "superadmin" || req.user.role === "admin"|| req.user.role === "assistant")) {
        console.log("Assistant verified:", req.user.name);
        next();
    } else {
        console.warn("Assistant access denied for:", req.user?.name || "Unknown");
        res.status(403).json({ error: "Assistant access required" });
    }
};

export const isLecturer = (req, res, next) => {
    if (req.user && (req.user.role === "superadmin" || req.user.role === "admin"|| req.user.role === "lecturer")) {
        console.log("Lecturer verified:", req.user.name);
        next();
    } else {
        console.warn("Lecturer access denied for:", req.user?.name || "Unknown");
        res.status(403).json({ error: "Lecturer access required" });
    }
};

export const isTechnition = (req, res, next) => {
    if (req.user && (req.user.role === "superadmin" || req.user.role === "admin"|| req.user.role === "technician")) {
        console.log("Technition verified:", req.user.name);
        next();
    } else {
        console.warn("Technition access denied for:", req.user?.name || "Unknown");
        res.status(403).json({ error: "Technition access required" });
    }
};




export const isSelfOrAdmin = (req, res, next) => {
    if (req.user && (req.user.role === "admin" || req.user._id.toString() === req.params.id)) {
        next();
    } else {
        res.status(403).json({ error: "Not authorized to update this user" });
    }
};