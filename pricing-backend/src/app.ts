import express from "express";
import cors from "cors";
import { connectDB, insertIntoDb } from "./server";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/getData", (req, res) => {
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

const port = process.env.PORT || 8080;

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
