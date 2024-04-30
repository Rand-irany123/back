import mongoose from "mongoose";
const connectDB=async(req,res)=>{
    return await mongoose.connect(process.env.DBURL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
    })
    .then((result)=>{
        console.log("connect")
    }).catch((error)=>{
        console.log("error",error)
    })
}
export default connectDB