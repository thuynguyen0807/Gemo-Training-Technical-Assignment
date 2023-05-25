"use client";
import OrderBreakfastItem from "@/app/order/OrderBreakfastItem";
import PlusIcon from "@/components/plusIcon";
import {
  bagelToppings,
  breakfastItems,
  drinkTypes,
  milkOptions,
  sandwichToppings,
  sizeOptions,
  sizeOptionsForHotDrink,
  toppingOptions,
} from "@/mock/data";
import { BreakFast, DrinkType } from "@/types/enum";
import { FC, useState } from "react";
import OrderCoffeeItem from "./OrderCoffeeItem";

const Order: FC = () => {
  const [totalCost, setTotalCost] = useState<number>(0);

  const handleCoffeeItemAdded = (cost: number) => {
    setTotalCost(totalCost + cost);
  };

  const handleBreakfastItemAdded = (cost: number) => {
    setTotalCost(totalCost + cost);
  };

  const tax = totalCost * 0.0725;
  const finalCost = totalCost + tax;

  return (
    <div className="flex min-h-screen p-16">
      <div className="border w-full bg-white rounded-md">
        <div className="flex justify-center mt-8">
          <h1 className=" font-black text-xl">Garden Cafeteria</h1>
        </div>
        <div className="p-8">
          <div className="mb-12">
            <div className="flex">
              <PlusIcon />
              <div className="ml-2">
                <h2>Coffee</h2>
              </div>
            </div>

            {drinkTypes.map((item) => (
              <div className="pl-8 pt-4" key={item}>
                <OrderCoffeeItem
                  toppingOptions={toppingOptions}
                  sizeOptions={
                    item !== DrinkType.Hot
                      ? sizeOptions
                      : sizeOptionsForHotDrink
                  }
                  onCoffeeItemAdded={handleCoffeeItemAdded}
                  milkOptions={milkOptions}
                  drinkType={item}
                />
              </div>
            ))}
          </div>

          {/* breakfast menu */}
          <div className="">
            <div className="flex">
              <PlusIcon />
              <div className="ml-2">
                <h2>Breakfast</h2>
              </div>
            </div>
            {breakfastItems.map((item) => (
              <div className="pl-8 pt-4" key={item}>
                <OrderBreakfastItem
                  type={item}
                  toppingOptions={
                    item === BreakFast.Sandwich
                      ? sandwichToppings
                      : bagelToppings
                  }
                  onBreakfastItemAdded={handleBreakfastItemAdded}
                />
              </div>
            ))}
          </div>
          {/* Cost */}
          <p className="font-black mt-6 ml-8">{`Total cost: $${totalCost}`}</p>
          <p className="font-black mt-6 ml-8">{`VAT: $${tax}`}</p>
          <p className="font-black mt-6 ml-8">{`Final cost: $${finalCost}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
