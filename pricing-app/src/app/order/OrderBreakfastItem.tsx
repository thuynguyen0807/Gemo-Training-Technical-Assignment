import { BreakFast, SandwichTopping } from "@/types/enum";
import { FC, useState } from "react";
import SelectionBox from "../../components/selectionBox";
import Options from "@/types";
import { Item } from "@/types/type";
import { calculateCost } from "../utils/handlingCost";
import { v4 as uuidv4 } from "uuid";

const defaultBreakfastItem: Item = {
  id: uuidv4(),
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
  const [breakfastItem, setBreakfastItem] =
    useState<Item>(defaultBreakfastItem);
  const [cost, setCost] = useState<number>(calculateCost(type, breakfastItem));
  const handleToppingChanged = (value: Options) => {
    setBreakfastItem({ ...breakfastItem, topping: value.value });
  };

  const handleQuantityChanged = (value: number) => {
    setBreakfastItem({ ...breakfastItem, quantity: value });
  };

  const handleBreakfastItemAdded = () => {
    const cost = calculateCost(type, breakfastItem);
    setCost(cost);
    onBreakfastItemAdded({ ...breakfastItem, id: uuidv4(), cost: cost });
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
          className="border rounded max-w-[100px] bg-gray-50 text-gray-800"
          placeholder="Enter quantity"
          defaultValue={1}
          onChange={(e) => handleQuantityChanged(Number(e.target.value))}
        />
        <p>{`$${cost}`}</p>
        <button
          className="bg-buttonBgColor w-12 rounded text-buttonColor"
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
