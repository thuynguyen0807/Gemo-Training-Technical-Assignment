import { BreakFast, DrinkType, Milk, Size, Topping } from "@/types/enum";
import { FC, useState } from "react";
import SelectionBox from "@/components/selectionBox";
import Options from "@/types";
import { defaultCoffee } from "@/mock/data";
import { Coffee } from "@/types/type";

type Props = {
  drinkType: DrinkType | BreakFast;
  toppingOptions: Options[];
  sizeOptions: Options[];
  milkOptions: Options[];
  onCoffeeItemAdded: (cost: number) => void;
};

const OrderCoffeeItem: FC<Props> = ({
  drinkType,
  toppingOptions,
  sizeOptions,
  milkOptions,
  onCoffeeItemAdded,
}: Props) => {
  const calculatePrice3 = (coffee: Coffee): number => {
    let cost = 0;
    switch (coffee.drinkType) {
      case DrinkType.Hot:
      case DrinkType.Cold:
        cost += 2;
        break;
      case DrinkType.Blended:
        cost += 3;
      default:
        break;
    }

    switch (coffee.size) {
      case Size.M:
        cost += 0.5;
        break;
      case Size.L:
        if (drinkType === DrinkType.Hot) {
          console.log("Hot drink does not include L");
          return cost;
        }
        cost += 1;
        break;
      default:
        break;
    }

    if (coffee.topping === Topping.WhippedCream) {
      cost += 0.5;
    }

    if (coffee.milk === Milk.AlmondMilk) {
      cost += 1.5;
    }

    if (coffee.chocolateSauce) {
      if (drinkType === DrinkType.Hot && coffee.chocolateSauce <= 6) {
        const costedChocolateSauce = coffee.chocolateSauce - 2;
        cost += costedChocolateSauce > 1 ? costedChocolateSauce * 0.5 : 0;
      } else {
        return cost;
      }
    }

    return cost * coffee.quantity;
  };

  const [coffee, setCoffee] = useState<Coffee>(defaultCoffee);
  const [cost, setCost] = useState<number>(calculatePrice3(defaultCoffee));
  const [error, setError] = useState<boolean>(false);
  const handleToppingChanged = (value: Options) => {
    setCoffee({ ...coffee, topping: value.value });
  };

  const handleSizeChanged = (value: Options) => {
    setCoffee({ ...coffee, size: value.value });
  };

  const handlePumpOfChocolateChanged = (value: number) => {
    if (value > 6) {
      setError(true);
    } else {
      setError(false);
    }
    setCoffee({ ...coffee, chocolateSauce: value });
  };

  const handleQuantityChanged = (value: number) => {
    setCoffee({ ...coffee, quantity: value });
  };

  const handleMilkChanged = (value: Options) => {
    setCoffee({ ...coffee, milk: value.value });
  };

  const handleCoffeeItemAdded = () => {
    const cost = calculatePrice3(coffee);
    setCost(cost);
    onCoffeeItemAdded(cost);
    postData("http://localhost:8080/makeOrder", coffee).then((coffee) => {
      console.log(coffee); // JSON data parsed by `data.json()` call
    });
  };

  async function postData(url: string, data: any) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
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
            options={sizeOptions}
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
          disabled={drinkType !== DrinkType.Hot}
          onChange={(e) => handlePumpOfChocolateChanged(Number(e.target.value))}
        />
        <input
          type="number"
          min="1"
          defaultValue={1}
          className="border rounded max-w-[100px]"
          placeholder="Enter quantity"
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
      {error && (
        <p className="text-red-600">
          Chocolate sauce is only included for hot drink maximum with 6 pumbs.
        </p>
      )}
    </div>
  );
};

export default OrderCoffeeItem;
