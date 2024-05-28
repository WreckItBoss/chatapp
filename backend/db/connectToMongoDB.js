import mongoose from 'mongoose';

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.URI);
        console.log("Connected to Mongoose");
    } catch (error) {
        console.log("Error connecting to Mongoose");
    }
};
export default connectToMongoDB;