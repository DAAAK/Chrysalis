import mongoose from "mongoose";

const connect = async () => {
  mongoose.connect(
    "mongodb+srv://DAAK:mongodbdiversity@cluster0.epkynix.mongodb.net/ChrysalisDB?retryWrites=true&w=majority"
  );
  const db = mongoose.connection;
  db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose.");
  });
};

export default connect;
