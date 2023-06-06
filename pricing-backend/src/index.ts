import express from "express";
import cors from "cors";
import { connectDB, getAll, insertIntoDb, updateOne } from "./server";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
})

app.post("/post", (req, res) => {
  console.log("Connect to React");
  res.send("/");
  connectDB();
});

app.post("/makeOrder", (req, res) => {
  const data = req.body;
  console.log(data);
  // res.send(data);
  insertIntoDb("orders", data);
})

app.get("/getOrders", async (req, res) => {
  const result = await getAll("orders");
  res.send(result);
  return result;
})

app.patch("/order/:id", async (req, res) => {
  const result = await updateOne("orders", req.params.id, req.body.status);
  console.log("res", result);
  res.send(result);
  return result;
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
