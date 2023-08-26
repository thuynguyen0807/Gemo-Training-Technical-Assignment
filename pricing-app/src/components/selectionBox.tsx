import Options from "@/types";
import { FC } from "react";
import Select, { PropsValue } from "react-select";
import StateManagedSelect from "react-select/dist/declarations/src/stateManager";

interface Props {
  isMulti: boolean;
  options: Options[];
  onChange: (values: any) => void;
  value?: any;
}

const SelectionBox: FC<Props> = ({ isMulti, options, onChange, value }) => {
  return (
    <Select
      isMulti={isMulti}
      className="basic-multi-select"
      classNamePrefix="select"
      defaultValue={options[0]}
      options={options}
      onChange={onChange}
      value={value}
    />
  );
};

export default SelectionBox;
