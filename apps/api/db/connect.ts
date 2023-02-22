import mongoose from "mongoose";
import { config } from "../src/utils/env";

const connect = async () => {
  mongoose.set("strictQuery", false);

  mongoose.connect(config.MONGODB_URI);
  const db = mongoose.connection;
  db.on("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose.");
  });
};

export default connect;
