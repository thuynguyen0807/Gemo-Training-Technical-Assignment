import { client } from "../server";
import { Order } from "../types";

export async function makeOrder(order: Order) {
    await client.db('pricing').collection("orders").insertOne(order);
}