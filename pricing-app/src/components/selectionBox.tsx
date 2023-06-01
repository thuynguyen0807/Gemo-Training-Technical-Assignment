import Options from "@/types";
import { FC } from "react";
import Select from "react-select";

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
      defaultValue={options[0]}
      options={options}
      onChange={onChange}
    />

  );
};

export default SelectionBox;
