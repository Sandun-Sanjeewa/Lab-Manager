import mongoose from "mongoose";

const labSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        type:String,
    },
    assistant:{type: mongoose.Schema.Types.ObjectId, ref: 'User',required:true}
},{ timestamps: true });

const Lab = mongoose.model('Lab', labSchema);
export default Lab;