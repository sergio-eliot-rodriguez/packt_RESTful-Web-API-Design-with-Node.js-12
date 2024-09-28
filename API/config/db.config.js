import mongoose from "mongoose";
import { ConfigService } from "../services/config.services";

export const connectDb = async (dbName) => {
  mongoose.connect(
    `mongodb://${ConfigService.MONGO_LOCALHOST}/${dbName}?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  );

  const db = mongoose.connection;
  db.on("open", () => console.log(`Connected to contactsdb database`));
  db.on("error", err => console.error(err.message + "IS IT CLOSED?"));
};