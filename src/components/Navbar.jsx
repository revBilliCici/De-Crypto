import React, { useState } from "react";

import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

const navLinks = [
  {
    id: "product",
    label: "Product",
    dropdown: true,
  },
  {
    id: "template",
    label: "Template",
    dropdown: true,
  },
  {
    id: "blog",
    label: "Blog",
    dropdown: false,
  },
  {
    id: "pricing",
    label: "Pricing",
    dropdown: false,
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h3 className="uppercase font-manrope font-bold text-[20px] leading-[25px]">
        De-Crypto
      </h3>

      <ul className="list-none sm:flex hidden justify-center items-center">
        {navLinks.map((item, index) => (
          <li
            key={item.id}
            className={`font-manrope hover:text-opacity-75 font-medium cursor-pointer text-[14px] leading-5 ${
              index === navLinks.length - 1 ? "mr-0" : "mr-8"
            } text-black`}
          >
            <a href={`#${item.id}`}>{item.label}</a>
            {item.dropdown && (
              <i
                style={{
                  border: "black solid",
                  borderWidth: "0 2px 2px 0",
                  display: "inline-block",
                  padding: "0 4px 4px 0",
                  transform: "rotate(45deg)",
                  marginLeft: "10px",
                  marginBottom: "3px",
                }}
              ></i>
            )}
          </li>
        ))}
      </ul>

      <div className="sm:flex hidden justify-center items-center">
        <button className="md:flex hidden font-manrope font-medium leading-5 text-sm">
          Login
        </button>
        <button className="bg-nav hover:bg-secondary text-white px-9 py-4 ml-5 text-sm font-medium font-manrope">
          Start Free
        </button>
      </div>

      <div className="relative sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <img
            src={closeIcon}
            alt="menu"
            className="object-contain cursor-pointer w-[34px] h-[34px]"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />
        ) : (
          <img
            src={menuIcon}
            alt="menu"
            className="object-contain cursor-pointer w-[34px] h-[34px]"
            onClick={() => {
              setToggle((prev) => !prev);
            }}
          />
        )}
        {toggle && (
          <ul className="list-none sm:hidden flex flex-col items-center absolute sidebar z-10 top-10 px-10 py-5 gap-3 bg-primary">
            {navLinks.map((item, index) => (
              <li
                key={item.id}
                className={`font-manrope hover:text-opacity-75 font-medium cursor-pointer text-[16px] leading-5 text-black`}
              >
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
            <button className="bg-nav hover:bg-secondary text-white px-6 py-4 mt-5 text-sm font-medium font-manrope">
              Start Free
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
