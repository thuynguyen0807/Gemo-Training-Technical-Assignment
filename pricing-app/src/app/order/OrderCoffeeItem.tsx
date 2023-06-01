import { BreakFast, DrinkType} from "@/types/enum";
import { FC, useState } from "react";
import SelectionBox from "@/components/selectionBox";
import Options from "@/types";
import { defaultCoffee } from "@/mock/data";
import { Item } from "@/types/type";
import { calculatePrice3 } from "../utils/handlingCost";

type Props = {
  type: DrinkType | BreakFast;
  toppingOptions: Options[];
  sizeOptions: Options[];
  milkOptions: Options[];
  onCoffeeItemAdded: (coffee: Item) => void;
};

const OrderCoffeeItem: FC<Props> = ({
  type,
  toppingOptions,
  sizeOptions,
  milkOptions,
  onCoffeeItemAdded,
}: Props) => {
  

  const [coffee, setCoffee] = useState<Item>(defaultCoffee);
  const [cost, setCost] = useState<number>(calculatePrice3(type, defaultCoffee));
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
    const cost = calculatePrice3(type, coffee);
    setCost(cost);
    onCoffeeItemAdded({...coffee, cost: cost});
  };

  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="min-w-[100px]">
          <p>{type}</p>
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
          disabled={type !== DrinkType.Hot}
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
