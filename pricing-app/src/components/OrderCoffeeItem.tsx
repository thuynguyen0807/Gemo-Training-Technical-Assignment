import { BreakFast, DrinkType, MenuType, Milk, Size, Topping } from "@/types";
import { FC, useState } from "react";
import SelectionBox from "./selectionBox";
import { Coffee, Options } from "@/app/order/page";

const defaultCoffee: Coffee = {
  drinkType: DrinkType.Hot,
  size: Size.S,
  milk: Milk.None,
  chocolateSauce: 0,
  quantity: 1,
  topping: Topping.None
}

type Props = {
  drinkType: DrinkType | BreakFast;
  toppingOptions: Options[];
  sizeOptions?: Options[];
  milkOptions?: Options[];
  onCoffeeItemAdded: (cost: number) => void;
};

const OrderCoffeeItem: FC<Props> = ({
  drinkType,
  toppingOptions,
  sizeOptions,
  milkOptions,
  onCoffeeItemAdded,
}: Props) => {
  const [coffee, setCoffee] = useState<Coffee>(defaultCoffee);
  const [cost, setCost] = useState<number>(0);
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
    setCoffee({...coffee, quantity: value});
   
  }

  const handleMilkChanged = (value: Options) => {
    setCoffee({...coffee, milk: value.value});
  }

  const calculatePrice3 = (drinkType: DrinkType, size: string, topping: string, milk: string, chocolateSauce: number): number => {
    let cost = 0;
    switch (drinkType) {
        case DrinkType.Hot:
        case DrinkType.Cold:
            cost += 2;
            break;
        case DrinkType.Blended:
            cost += 3;
        default:
            break;
    }

    switch(size) {
        case Size.M:
            cost += 0.5;
            break;
        case Size.L:
            if (drinkType === DrinkType.Hot) {
                console.log('Hot drink does not include L'); 
                return cost;
            }
            cost += 1;
            break;
        default:
            break;
    }

    if (topping === Topping.WhippedCream) {
        cost += 0.5;
    }

    if (milk === Milk.AlmondMilk) {
        cost += 1.5;
    }

    if (chocolateSauce) {
        if (drinkType === DrinkType.Hot && chocolateSauce <= 6) {
            const costedChocolateSauce = chocolateSauce - 2;
            cost += costedChocolateSauce > 1 ? costedChocolateSauce * 0.5 : 0;
        } else {
            console.log('Chocolate sauce is only included for hot drink maximum with 6 pumbs.');
            return cost;
        }
    }

    return cost;
}

  const handleCoffeeItemAdded = () => {
    const cost = calculatePrice3(coffee.drinkType, coffee.size, coffee.topping, coffee.milk, coffee.chocolateSauce)*coffee.quantity
    setCost(cost);
    onCoffeeItemAdded(cost)
  }

  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="min-w-[100px]">
          <p>{drinkType}</p>
        </div>
          <div className="">
            <SelectionBox
              isMulti={false}
              options={sizeOptions ?? []}
              onChange={handleSizeChanged}
            />
          </div>
        <div className="">
          <SelectionBox
            isMulti={false}
            options={toppingOptions}
            onChange={handleToppingChanged}
          />
        </div>
          <div className="">
            <SelectionBox
              isMulti={false}
              options={milkOptions ?? []}
              onChange={handleMilkChanged}
            />
          </div>
          <input
            type="number"
            min="1"
            max="6"
            className="border rounded max-w-[100px]"
            placeholder="Enter pump of chocolate sauce"
            defaultValue={0}
            onChange={(e) => handlePumpOfChocolateChanged(Number(e.target.value))}
          />

        <input
          type="number"
          min="1"
          className="border rounded max-w-[100px]"
          placeholder="Enter quantity"
          defaultValue={1}
          onChange={(e) => handleQuantityChanged(Number(e.target.value))}
        />
        <p>{`$${cost}`}</p>
        <button
          className="bg-gray-700 w-12 rounded text-white"
          onClick={handleCoffeeItemAdded}
        >
          Add
        </button>
      </div>
      <hr />
    </div>
  );
};

export default OrderCoffeeItem;
