import { MongoClient, ObjectId } from "mongodb";

const connectionString =
  "mongodb+srv://thuynguyen:131123Na@cluster0.wnuov.mongodb.net/";

export const client = new MongoClient(connectionString);

export const insertIntoDb = async (collectionName: string, document: any) => {
  await client.db("pricing").collection(collectionName).insertOne(document);
};

export const getAll = async (collectionName: string) => {
  const res = await client
    .db("pricing")
    .collection(collectionName)
    .find()
    .toArray();
  return res;
};

export const updateOne = async (
  collectionName: string,
  id: ObjectId,
  newStatus: string
) => {
  const updatedItem = await client
    .db("pricing")
    .collection(collectionName)
    .findOneAndUpdate({ _id: id }, { $set: { status: newStatus } });
  console.log("updated item", updatedItem);
  return updatedItem;
};

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("DB connected successfully!");
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
};
