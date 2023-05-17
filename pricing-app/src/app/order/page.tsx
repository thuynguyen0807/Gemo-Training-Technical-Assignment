"use client";
import EditingOrderItem from "@/components/editingOrderItem";
import PlusIcon from "@/components/plusIcon";
import { BreakFast, DrinkType, MenuType, Milk, Size, Topping } from "@/types";
import { FC, useRef, useState } from "react";

const coffeeToppings = [
  { value: "whippedCream", label: "Whipped Cream" },
  { value: "wholeMilk", label: "Whole Milk" },
  { value: "almondMilk", label: "Almond Milk" },
  { value: "chocolateSauce", label: "Chocolate Sauce" },
];

export interface Options {
  readonly value: string;
  readonly label: string;
  readonly isDisabled?: boolean;
}

const toppingOptions: Options[] = [
  { value: "milk", label: "Milk" },
  { value: "chocolate", label: "Chocolate" },
  { value: "whippedCream", label: "Whipped Cream" },
  { value: "whippedCream1", label: "Whipped Cream1" },
];

const sizeOptions: Options[] = [
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
];

const drinkTypes = [
  DrinkType.Hot,
  DrinkType.Cold,
  DrinkType.Blended,
  DrinkType.MilkTea,
];

const breakfastItems = [BreakFast.Sandwich, BreakFast.Bagel];

const milkOptions = [{ value: "s", label: "S" },
  { value: Milk.None, label: Milk.None },
  { value: Milk.AlmondMilk, label: Milk.AlmondMilk },
  { value: Milk.AlmondMilk, label: Milk.AlmondMilk },
]

export type Coffee = {
  drinkType: DrinkType;
  size: string;
  topping: string;
  milk: string;
  chocolateSauce: number;
  quantity: number;
}

const defaultCoffee: Coffee = {
  drinkType: DrinkType.Hot,
  size: Size.S,
  milk: Milk.None,
  chocolateSauce: 0,
  quantity: 1,
  topping: Topping.None
}

const Order: FC = () => {
  const [coffee, setCoffee] = useState<Coffee>(defaultCoffee);
  const coffeeItems = useRef([]);
  const handleToppingChanged = (
    value: Options
  ) => {
    setCoffee({...coffee, topping: value.value});
  };

  const handleSizeChanged = (
    value: Options
  ) => {
    setCoffee({...coffee, size: value.value});
  };

  const handlePumpOfChocolateChanged = (value: number) => {
    setCoffee({...coffee, chocolateSauce: value});
  }

  const handleQuantityChanged = (value: number) => {
    setCoffee({...coffee, chocolateSauce: value});
  }

  const handleMilkChanged = (value: Options) => {
    setCoffee({...coffee, milk: value.value});
  }

  const handleItemAdded = () => {

  }

  return (
    <div className="flex min-h-screen p-16">
      <div className="border w-full bg-white rounded-md">
        <div className="flex justify-center mt-8">
          <h1 className=" text-black">ABC Coffee Shop</h1>
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
                <EditingOrderItem
                  foodItem={item}
                  toppingOptions={toppingOptions}
                  sizeOptions={sizeOptions}
                  onToppingChanged={handleToppingChanged}
                  onSizeChanged={handleSizeChanged}
                  onItemAdded={handleItemAdded}
                  menuType={MenuType.Coffee} 
                  onChocolateSauceChanged={handlePumpOfChocolateChanged} 
                  onMilkChanged={handleMilkChanged}     
                  onQuantityChanged={handleQuantityChanged}
                  milkOptions={milkOptions}           />
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
                <EditingOrderItem
                  menuType={MenuType.BreakFast}
                  foodItem={item}
                  toppingOptions={toppingOptions}
                  onToppingChanged={handleToppingChanged}
                  onQuantityChanged={handleQuantityChanged}
                  onItemAdded={handleItemAdded}     
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
