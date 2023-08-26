import { FC } from "react";

const PlusIcon: FC = () => {
  return (
    <div className="relative bg-buttonBgColor rounded-full w-5 h-5">
      <div className="absolute mt-[9px] ml-[4px]">
        <div className="h-[2px] w-3 bg-buttonIconColor transition-all rotate-90" />
        <div className="h-[2px] w-3 -translate-y-[2px] bg-buttonIconColor" />
      </div>
    </div>
  );
};

export default PlusIcon;
