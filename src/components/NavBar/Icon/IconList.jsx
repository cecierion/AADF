import React from "react";
import { IconData } from "../../../utils/dummyData";

const IconList = () => {
  const Icon = IconData.map((data) => (
    <li className={data.class}>{data.icon}</li>
  ));
  return (
    <div>
      <ul className="flex items-center">{Icon}</ul>
    </div>
  );
};

export default IconList;
