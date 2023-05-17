import { BreakFast, DrinkType, MenuType } from "@/types";
import { FC } from "react";
import SelectionBox from "./selectionBox";
import { Options } from "@/app/order/page";

type Props = {
  menuType: MenuType;
  foodItem: DrinkType | BreakFast;
  toppingOptions: Options[];
  sizeOptions?: Options[];
  milkOptions?: Options[];
  onToppingChanged: (
    values: Options
  ) => void;
  onSizeChanged?: (value: Options) => void;
  onQuantityChanged: (value: number) => void;
  onChocolateSauceChanged?: (value: number) => void;
  onMilkChanged?: (values: Options) => void;
  onItemAdded: () => void;
};

const EditingOrderItem: FC<Props> = ({
  menuType,
  foodItem,
  toppingOptions,
  sizeOptions,
  milkOptions,
  onToppingChanged,
  onSizeChanged,
  onQuantityChanged,
  onChocolateSauceChanged,
  onMilkChanged,
  onItemAdded,
}: Props) => {
  
  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="min-w-[100px]">
          <p>{foodItem}</p>
        </div>
        {menuType === MenuType.Coffee && (
          <div className="">
            <SelectionBox
              isMulti={false}
              options={sizeOptions ?? []}
              onChange={onSizeChanged}
            />
          </div>
        )}
        <div className="">
          <SelectionBox
            isMulti={false}
            options={toppingOptions}
            onChange={onToppingChanged}
          />
        </div>
        {menuType === MenuType.Coffee && (
          <div className="">
            <SelectionBox
              isMulti={false}
              options={milkOptions ?? []}
              onChange={onMilkChanged}
            />
          </div>
        )}

        {menuType === MenuType.Coffee && (
          <input
            type="number"
            min="1"
            className="border rounded max-w-[100px]"
            placeholder="Enter pump of chocolate sauce"
            onChange={(e) => onChocolateSauceChanged(Number(e.target.value))}
          />
        )}

        <input
          type="number"
          min="1"
          className="border rounded max-w-[100px]"
          placeholder="Enter quantity"
          onChange={(e) => onQuantityChanged(Number(e.target.value))}
        />
        <button
          className="bg-gray-700 w-12 rounded text-white"
          onClick={onItemAdded}
        >
          Add
        </button>
      </div>
      <hr />
    </div>
  );
};

export default EditingOrderItem;
