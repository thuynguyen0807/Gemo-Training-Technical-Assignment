import { FC } from "react";
import {
  MultiValue,
  SingleValue,
} from "react-select";
import Select from "react-select";
import { Options } from "@/app/order/page";

type Props = {
    isMulti: boolean;
    options: Options[];
    onChange: (values: any) => void;
};

const SelectionBox: FC<Props> = ({isMulti, options, onChange}) => {
  return (
    <Select
      isMulti={isMulti}
      className="basic-multi-select"
      classNamePrefix="select"
      options={options}
      onChange={onChange}
    />

  );
};

export default SelectionBox;
