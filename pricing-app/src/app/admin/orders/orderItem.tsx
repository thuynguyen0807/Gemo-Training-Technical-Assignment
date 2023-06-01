import SelectionBox from "@/components/selectionBox";
import { orderStatus } from "@/mock/data";
import { Item, Options } from "@/types/type";
import { FC } from "react";

type Props = {
  id: string;
  createdAt: string;
  updatedAt: string;
  cost: number;
  status: string;
  onOrderUpdated: (id: string) => void;
  onChangeStatusOrder: (value: Options) => void;
};

const OrderItemView: FC<Props> = ({
  id,
  createdAt,
  updatedAt,
  cost,
  status,
  onOrderUpdated,
  onChangeStatusOrder,
}: Props) => {
  return (
    <div className="mb-4">
      <div className="flex w-full justify-between" onClick={() => {}}>
        <div className="">{`$${cost}`}</div>
        <div className="">{status}</div>
        <div className="">{createdAt}</div>
        <div className="">{updatedAt}</div>
        <SelectionBox
          isMulti={false}
          options={orderStatus}
          onChange={onChangeStatusOrder}
        />
        <button
          className="bg-gray-700 w-20 h-8 rounded text-white"
          onClick={() => onOrderUpdated(id)}
        >
          Update
        </button>
      </div>
      <hr />
    </div>
  );
};

export default OrderItemView;
