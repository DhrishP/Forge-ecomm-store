import { ShoppingBag } from "lucide-react";
import React from "react";
import Link from "next/link";
import Mainnav from "./main-nav";
import getCategories from "@/data-fetchers/get-categories";

export const revalidate = 0;

const Navbar = async () => {
  const CategoriesNav = await getCategories();
  console.log(CategoriesNav)
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn text-neutral btn-ghost lg:hidden">
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
           <Mainnav data={CategoriesNav}/>
          </ul>
        </div>
        <Link href="" className="  font-black ml-4  text-xl">
          STORE
        </Link>
        <div className=" hidden lg:flex ml-4 font-semibold  ">
          <Mainnav data={CategoriesNav} />
        </div>
      </div>

      <div className="navbar-end  ">
        <Link href="" className="btn btn-square btn-neutral ">
          <ShoppingBag />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
