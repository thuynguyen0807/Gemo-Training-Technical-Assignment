import { FC } from "react";

type Props = {
  type: string;
  topping: string;
  size: string;
  milk: string;
  chocolateSauce: number;
  quantity: number;
  cost: number;
  onRemoveItem: (id: string) => void;
};

const OrderCoffeeItemAdded: FC<Props> = ({
  type,
  topping,
  size,
  milk,
  chocolateSauce,
  quantity,
  cost,
  onRemoveItem
}: Props) => {
  return (
    <div className="mb-4">
      <div className="flex w-full justify-between">
        <div className="min-w-[100px]">
          <p>{type}</p>
        </div>
        <div className="">{size}</div>
        <div className="">{topping}</div>
        <div className="">{milk}</div>
        <div className="">{chocolateSauce}</div>
        <div className="">{quantity}</div>
        <div className="">{`$${cost}`}</div>
        <button
          className="bg-gray-700 w-20 h-8 rounded text-white"
          // onClick={() => onRemoveItem(id)}
        >
          Remove
        </button>
      </div>
      <hr />
    </div>
  );
};

export default OrderCoffeeItemAdded;
