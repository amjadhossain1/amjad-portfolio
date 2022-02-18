import React from "react";
import { Category } from "../../type";

interface Props {}

const NavItem: React.FC<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

export default NavItem;
