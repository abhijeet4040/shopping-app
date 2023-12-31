import { NavLink } from "react-router-dom"
import { LogoImage } from "../../../../assets/images" 



export const Logo = () => {
  return (

    <div className='flex gap-[6px]'>
      <div> <img  className='sm:w-[46px] sm:h-auto ' src={LogoImage} alt="#" /> </div>
      <NavLink to='/' className=' text-[22px] logoFontPhone sm:text-[32px] self-center'> ShopHub </NavLink>
    </div>


  )
}
