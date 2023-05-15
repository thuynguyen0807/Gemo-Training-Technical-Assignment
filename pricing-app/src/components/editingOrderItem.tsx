import { DrinkType } from "@/types";
import { FC } from "react";
import { ActionMeta, InputActionMeta } from "react-select";
import Select from "react-select/dist/declarations/src/Select";

type Props = {
  drinkType: DrinkType;
  isCoffee: boolean;
  size: any;
  topping: any;
};

const EditingOrderItem: FC<Props> = ({
  drinkType,
  isCoffee,
  size,
  topping,
}: Props) => {
  return (
    <div>
      <div className="flex w-full justify-between">
        <p>{drinkType}</p>
        {/* <Select
          onChange={}
          inputValue={}
          onInputChange={}
          onMenuOpen={}
          onMenuClose={}
          value={}
        /> */}
      </div>
      <hr />
    </div>
  );
};

export default EditingOrderItem;
