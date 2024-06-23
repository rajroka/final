import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongodb connected");
    });
    connection.on("error", (err) => {
      console.log(err);
    });
  } catch (err) {
    console.log("Mongodb connection error" + err);
    process.exit();
  }
}
