"use client";
import OrderBreakfastItem from "@/app/order/OrderBreakfastItem";
import OrderCoffeeItem from "@/app/order/OrderCoffeeItem";
import PlusIcon from "@/components/plusIcon";
import { BreakFast, DrinkType, Milk, Size, Topping } from "@/types";
import { BagelTopping, SandwichTopping } from "@/types/enum";
import { FC, useState } from "react";

export interface Options {
  readonly value: string;
  readonly label: string;
  readonly isDisabled?: boolean;
}

const toppingOptions: Options[] = [
  { value: "none", label: Topping.None },
  { value: "whippedCream", label: Topping.WhippedCream },
];

const sizeOptions: Options[] = [
  { value: "S", label: Size.S },
  { value: "M", label: Size.M },
  { value: "L", label: Size.L },
  { value: "XL", label: Size.XL },
];

const sizeOptionsForHotDrink: Options[] = [
  { value: "S", label: Size.S },
  { value: "M", label: Size.M }
];

const drinkTypes = [
  DrinkType.Hot,
  DrinkType.Cold,
  DrinkType.Blended,
  DrinkType.MilkTea,
];

const breakfastItems = [BreakFast.Sandwich, BreakFast.Bagel];

const milkOptions = [
  { value: Milk.None, label: Milk.None },
  { value: Milk.AlmondMilk, label: Milk.AlmondMilk },
  { value: Milk.WholeMilk, label: Milk.WholeMilk },
];

const sandwichToppings = [
  { value: "egg", label: SandwichTopping.Egg },
  { value: "turkey", label: SandwichTopping.Turkey },
  { value: "none", label: SandwichTopping.None },
];

const bagelToppings = [
  { value: "butter", label: BagelTopping.Butter },
  { value: "creamCheese", label: BagelTopping.CreamCheese },
  { value: "none", label: BagelTopping.None },
];

export type Coffee = {
  drinkType: DrinkType;
  size: string;
  topping: string;
  milk: string;
  chocolateSauce: number;
  quantity: number;
};

const Order: FC = () => {
  const [totalCost, setTotalCost] = useState<number>(0);

  const handleCoffeeItemAdded = (cost: number) => {
    setTotalCost(totalCost + cost);
  };

  const handleBreakfastItemAdded = (cost: number) => {
    setTotalCost(totalCost + cost);
  };

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
                  sizeOptions={item !== DrinkType.Hot ? sizeOptions : sizeOptionsForHotDrink}
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
        </div>
      </div>
    </div>
  );
};

export default Order;
