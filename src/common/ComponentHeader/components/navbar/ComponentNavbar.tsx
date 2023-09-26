import { MenuIcon } from "../../../../assets/icons"
import { SocialsImage } from "../../../../assets/images"
import { WhiteCardCounter } from "../CardCounter/WhiteCardCounter"
import { NavLinks } from "../NavLinks/NavLinks"
import { Logo } from "../logo/Logo"
import { SearchBar } from "../logo/SearchBar"


export const ComponentNavbar = () => {
  return (
    <div className="flex flex-col p-[20px] sm:p-[50px] gap-[10px] xl:flex-row lg:justify-between lg:px-[90px]">
      <div className="flex flex-col gap-[20px] sm:justify-between sm:flex-row ">
        <div className="flex items-center justify-between ">
          <MenuIcon />
          <Logo />
          <WhiteCardCounter />
        </div>
        <div className="flex justify-center">
          <SearchBar />
        </div>
      </div>
      <div className="sm:flex justify-between hidden lg:gap-[60px] items-center">
        <NavLinks/>
        <img className="h-[24px]" src={SocialsImage} alt="#" />
      </div>
    </div>
  )
}
