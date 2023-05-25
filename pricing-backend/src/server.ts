import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://thuynguyen:131123Na@cluster0.wnuov.mongodb.net/";

export const client = new MongoClient(connectionString);
export const connectDB = async () => {
  try {
    await client.connect();
    console.log("DB connected successfully!")
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
};