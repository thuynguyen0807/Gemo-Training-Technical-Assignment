import { FC } from "react";

type Props = {
  id: string;
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
  id,
  type,
  topping,
  size,
  milk,
  chocolateSauce,
  quantity,
  cost,
  onRemoveItem,
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
          className="bg-buttonBgColor w-12 rounded text-buttonColor"
          onClick={() => onRemoveItem(id)}
        >
          Remove
        </button>
      </div>
      <hr />
    </div>
  );
};

export default OrderCoffeeItemAdded;
