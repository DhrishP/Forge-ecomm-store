import React from "react";
import Link from "next/link";
import Mainnav from "./main-nav";
import getCategories from "@/data-fetchers/get-categories";
import ShoppingIcon from "./shoppingIcon";
import ThemeButton from "./theme-button";

const Navbar = async () => {

  
  const data = await getCategories();

  return (
    <div className="navbar bg-base-100 border-b-gray-500 border h-16">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn text-accent btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Mainnav
              className="flex-col font-semibold space-y-2  "
              data={data}
            />
          </ul>
        </div>
        <Link href="/" className="font-black ml-2 text-2xl flex items-center h-16 overflow-hidden">
          TinkerLab🧪
          <span className="text-primary text-sm flex items-center ml-2">
            <span className="text-sm">by</span>
            <a
              href="https://dhrishp1.whyfied.me"
              className="hover:underline text-primary ml-0.5 whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              whycurious
            </a>
          </span>
        </Link>
        <div className=" hidden lg:flex ml-4 font-semibold  h-16 items-center">
          <Mainnav className="items-center space-x-4  px-1" data={data} />
        </div>
      </div>

      <div className="navbar-end mr-1 lg:mr-5 md:mr-3 gap-x-2 flex items-center  h-16">
        <ThemeButton/>
        <ShoppingIcon />
      </div>
    </div>
  );
};

export default Navbar;
