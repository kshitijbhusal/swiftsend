import mongoose from "mongoose";





export const connectDB = () => {
  
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Databse connected !")   
  } catch (error) {
    console.log("Database connection failed !", error);


    
  }
};




