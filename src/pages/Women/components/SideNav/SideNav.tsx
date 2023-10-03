import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/ToolkitHooks";
import { toggleNavbar } from "../../../../redux/slices/NavbarSlice";
import { Categories } from "./components/Categories/Categories";
import { ColorList } from "./components/ColorList/ColorList";
import { PriceList } from "./components/PriceList/PrizeList";
import { SizeList } from "./components/SizeList/SizeList";
import { StyleList } from "./components/StyleList/StyleList";
import { ToggleNavButton } from "./components/ToggleButton/ToggleNavButton";

export const SideNav = () => {
  const NavIsOpen = useAppSelector((state) => state.NavbarToggle.isOpen);

  const dispatch = useAppDispatch()

  const HandleClick = () => {
    dispatch(toggleNavbar())
  }

  return (
    <div className="absolute sm:static sm:z-0 z-30 top-0 left-0 bg-white ">
      <div className="p-[20px] md:px-[50px] xl:px-[90px]" onClick={HandleClick}>
        <ToggleNavButton />
      </div>
      <div
        className={`flex flex-col p-[20px] md:px-[50px] xl:px-[90px] bg-white  ${
          NavIsOpen ? "block" : "hidden"
        }`}
      >
        <Categories />
        <StyleList />
        <ColorList />
        <SizeList />
        <PriceList />
      </div>
    </div>
  );
};
