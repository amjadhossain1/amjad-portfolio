import Link from "next/link";
import React from "react";

interface IProps {
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}
const NavItem: React.FC<IProps> = (props: any) => {
  const { activeItem, setActiveItem, name, route } = props;

  return activeItem !== name ? (
    <Link href={route}>
      <a>
        <span onClick={() => setActiveItem(name)} className='hover:text-green'>{name}</span>
      </a>
    </Link>
  ) : null;
};

export default NavItem;
