"use client";
import { updateData } from "@/app/utils";
import { FC, useEffect, useRef, useState } from "react";
import OrderItemView from "./orderItem";
import { Options, Order } from "@/types/type";
import moment from "moment";

const OrderPage: FC = () => {
  const [items, setItems] = useState<Order[]>([]);
  const newStatus = useRef<string>();
  const getOrders = async () => {
    const res = await fetch("https://gemo-training-technical-assignment-p8kdqm65x-thuynguyen0807.vercel.app/getOrders");
    const data = await res.json();
    setItems(data);
    return data;
  };

  const handleChangeStatusOrder = (value: Options) => {
    newStatus.current = value.value;
  }

  const handleUpdatedOrder = async (id: string) => {
    const newItem = await updateData(`https://gemo-training-technical-assignment-p8kdqm65x-thuynguyen0807.vercel.app/order/${id}`, {status: newStatus.current});
    console.log("newItem", newItem);
  };

  useEffect(() => {
    const handle = async () => {
      await getOrders();
    };
    handle();
  }, []);

  return (
    <div className="flex min-h-screen p-16">
      <div className="border w-full bg-white rounded-md">
        <div className="flex justify-center mt-8">
          <h1 className=" font-black text-xl">Garden Cafeteria Admin</h1>
        </div>
        <div className="p-8">
          {items.map((item) => (
            <OrderItemView
              id={item._id ?? ""}
              createdAt={moment(item.createdAt).format("DD MMM YYYY")}
              updatedAt={moment(item.updatedAt).format("DD MMM YYYY")}
              cost={item.cost}
              status={item.status}
              onOrderUpdated={handleUpdatedOrder}
              onChangeStatusOrder={handleChangeStatusOrder}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
