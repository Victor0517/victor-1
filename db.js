import mongoose from 'mongoose';

export const connectDB = async () => {

    try{
        await mongoose.connect("mongodb://27017/mernlogin");
        console.log (">> DB Connect");
    }   catch (error){
        console.log(error)
    }

}