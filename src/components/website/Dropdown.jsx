import React from "react";

const Dropdown = (props) => {
  const { opation } = props;
  return (
    <div className=" w-[180px] h-[200px]  abs   overflow-y-auto p-2 rounded-md bg-secendary text-white">
      <ul>
        {opation.map((title) => (
          <li className="p-1" key={title}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
