import logo from "../../../assets/images/logo.svg";
import burgerIcon from "../../../assets/images/icon-menu.svg";
import burgerIconClose from "../../../assets/images/icon-menu-close.svg";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  menu: number;
  setMenu: React.Dispatch<React.SetStateAction<number>>;
};

const Header = ({ menu, setMenu }) => {
  return (
    <header>
      <div className="fixed bg-white w-2/3 h-full right-0">
        <div className=" ">
          <button type="button" className="flex w-full justify-end py-7 px-6 ">
            <img className="" src={burgerIconClose} alt="" />
          </button>
          <ul className="my-16  ">
            <li>
              <button type="button">Home</button>
            </li>
            <li>
              <button type="button">New</button>
            </li>
            <li>
              <button type="button">Popular</button>
            </li>
            <li>
              <button type="button">Trending</button>
            </li>
            <li>
              <button type="button">Categories</button>
            </li>
          </ul>
        </div>
      </div>
      <nav className="w-full flex justify-between py-7">
        <img src={logo} alt="" className="w-11" />
        <img src={burgerIcon} alt="" className="w-10" />
      </nav>
    </header>
  );
};

export default Header;
