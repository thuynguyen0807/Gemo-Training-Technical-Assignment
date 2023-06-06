import { MongoClient, ObjectId } from "mongodb";

export const client = new MongoClient("mongodb+srv://thuynguyen:131123Na@cluster0.wnuov.mongodb.net/");

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
  id: string,
  newStatus: string
) => {
  console.log(collectionName, id, newStatus)
  const updatedItem = await client
    .db("pricing")
    .collection(collectionName)
    .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { status: newStatus } }, { returnDocument: 'after' });
  console.log("updated item", updatedItem);
  return updatedItem.value;
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
