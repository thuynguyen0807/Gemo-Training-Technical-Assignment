import EditingOrderItem from "@/components/editingOrderItem";
import PlusIcon from "@/components/plusIcon";
import { DrinkType } from "@/types";
import { FC } from "react";

export default function Order() {
  return (
    <div className="flex min-h-screen p-16">
      <div className="border w-full bg-white rounded-md">
        <div className="flex justify-center mt-8">
          <h1 className=" text-black">ABC Coffee Shop</h1>
        </div>
        <div className="p-8">
          <div className="flex">
            <PlusIcon />
            <div className="ml-2">
              <h2>Coffee</h2>
            </div>
          </div>

          <div className="pl-8 pt-4">
            <EditingOrderItem
              drinkType={DrinkType.Hot}
              isCoffee={false}
              size={""}
              topping={"undefined"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
