import { BagelTopping, BreakFast, SandwichTopping } from "@/types/enum";
import { FC, useState } from "react";
import SelectionBox from "../../components/selectionBox";
import Options from "@/types";
import { Item } from "@/types/type";

const defaultBreakfastItem: Item = {
  type: BreakFast.Sandwich,
  topping: SandwichTopping.None,
  quantity: 1,
  cost: 0,
};

type Props = {
  type: BreakFast;
  toppingOptions: Options[];
  onBreakfastItemAdded: (breakfast: Item) => void;
};

const OrderBreakfastItem: FC<Props> = ({
  type,
  toppingOptions,
  onBreakfastItemAdded,
}: Props) => {
  const [breakfastItem, setBreakfastItem] = useState<Item>(defaultBreakfastItem);
  const calculateCost = (): number => {
    let costOfBreakfast = 0;

    switch (type) {
      case BreakFast.Sandwich:
        if (breakfastItem.topping !== SandwichTopping.None) {
          costOfBreakfast += 4;
        } else {
          costOfBreakfast += 3;
        }
        break;
      default:
        if (breakfastItem.topping !== BagelTopping.None) {
          costOfBreakfast += 3.5;
        } else {
          costOfBreakfast += 3;
        }
    }

    return costOfBreakfast * breakfastItem.quantity;
  };
  const [cost, setCost] = useState<number>(calculateCost());
  const handleToppingChanged = (value: Options) => {
    setBreakfastItem({ ...breakfastItem, topping: value.value });
  };

  const handleQuantityChanged = (value: number) => {
    setBreakfastItem({ ...breakfastItem, quantity: value });
  };

  const handleBreakfastItemAdded = () => {
    const cost = calculateCost();
    setCost(cost);
    onBreakfastItemAdded({...breakfastItem, cost: cost});
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
            options={toppingOptions}
            onChange={handleToppingChanged}
          />
        </div>

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
          onClick={handleBreakfastItemAdded}
        >
          Add
        </button>
      </div>
      <hr />
    </div>
  );
};

export default OrderBreakfastItem;
