import { NavLink } from "react-router-dom";
import { HoverMenu } from "../HoverMenu/HoverMenu";

export const ComponentCategories = () => {
  return (
    <div className="hidden lg:block p-[50px] xl:px-[90px]">
      <ul className="flex justify-between LinkFont whitespace-nowrap">
        <NavLink to='women' className="cursor-pointer relative group">
            Women

          <div className=" grid-cols-4 grid-rows-2 w-[725px] hidden group-hover:grid p-6 absolute bg-white z-10">
            <HoverMenu />
          </div>
        </NavLink>
        <li className="cursor-pointer relative group">
          Men
          <div className=" grid-cols-4 grid-rows-2 w-[725px] hidden group-hover:grid p-6 absolute bg-white z-10">
            <HoverMenu />
          </div>
        </li>
        <li className="cursor-pointer relative group">
          Children
          <div className=" grid-cols-4 grid-rows-2 w-[725px] hidden group-hover:grid p-6 absolute bg-white z-10">
            <HoverMenu />
          </div>
        </li>
        <li className="cursor-pointer relative group">
          Home & Furniture
          <div className=" grid-cols-4 grid-rows-2 w-[725px] hidden group-hover:grid p-6 absolute bg-white z-10">
            <HoverMenu />
          </div>
        </li>
        <li className="cursor-pointer relative group">
          Super Market
          <div className=" grid-cols-4 grid-rows-2 w-[725px] hidden group-hover:grid p-6 absolute bg-white z-10">
            <HoverMenu />
          </div>
        </li>
        <li className="cursor-pointer relative group">
          Cosmetics
          <div className=" right-0 grid-cols-4 grid-rows-2 w-[725px] hidden group-hover:grid p-6 absolute bg-white z-10">
            <HoverMenu />
          </div>
        </li>
        <li className="cursor-pointer relative group">
          Shoe & Bag
          <div className=" right-0 grid-cols-4 grid-rows-2 w-[725px] hidden group-hover:grid p-6 absolute bg-white z-10">
            <HoverMenu />
          </div>
        </li>
        <NavLink to='Electronics' className="cursor-pointer relative group">
          Electronics
          <div className=" right-0 grid-cols-4 grid-rows-2 w-[725px] hidden group-hover:grid p-6 absolute bg-white z-10">
            <HoverMenu />
          </div>
        </NavLink>
        <li className="cursor-pointer relative group">
          Sports & Outdoor
          <div className=" right-0 grid-cols-4 grid-rows-2 w-[725px] hidden group-hover:grid p-6 absolute bg-white z-10">
            <HoverMenu />
          </div>
        </li>
        <li className="cursor-pointer relative group">
          Bestseller
          <div className=" right-0 grid-cols-4 grid-rows-2 w-[725px] hidden group-hover:grid p-6 absolute bg-white z-10">
            <HoverMenu />
          </div>
        </li>
      </ul>
    </div>
  );
};
