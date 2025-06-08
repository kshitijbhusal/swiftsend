import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://bhushalkshitiz8888:GnSSC9BpVMhdkCV2@cluster0.6almqyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = () => {
  try {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Databse connected !")
  } catch (error) {
    console.log("Database connection failed !", error);


    
  }
};




// GnSSC9BpVMhdkCV2


// mongodb+srv://bhushalkshitiz8888:GnSSC9BpVMhdkCV2@cluster0.6almqyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
