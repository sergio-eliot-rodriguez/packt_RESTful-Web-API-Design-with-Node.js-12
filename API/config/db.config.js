import mongoose from "mongoose";
import { ConfigService } from "../services/config.services";

export const connectDb = async () => {
  mongoose.connect(
    `mongodb://${ConfigService.MONGO_LOCALHOST}/contactsdb?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  );

  const db = mongoose.connection;
  db.on("open", () => console.log(`Connected to contactsdb database`));
  db.on("error", err => console.error(err.message));
};