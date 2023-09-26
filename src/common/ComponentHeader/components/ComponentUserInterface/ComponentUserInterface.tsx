
import { CategoriesIcon, DownArrowWhite } from '../../../../assets/icons'
import { MenCosmetics } from '../../../../assets/images'
import { BlackCardCounter } from '../CardCounter/BlackCardCounter'
import { FavoritesButton } from '../FavoriteButton/FavoritesButton'
import { ComponentSignInButton } from '../SignInButton/ComponentSignInButton'

export const ComponentUserInterface = () => {
  return (
    <div className='bg-black md:flex hidden p-[20px] px-[50px] xl:justify-between justify-evenly items-center xl:px-[90px]'>
      <div className='flex gap-[40px]'>
        <div className='flex'>
          <CategoriesIcon />
          <p className='text-white font-lato font-semibold text-20 leading-20'>Categories</p>
        </div>

        <div className='flex gap-[40px]'>
          <div className='flex'>
            <p className='text-white font-lato font-normal text-12 leading-5'>USD</p>
            <DownArrowWhite />
          </div>
          <div className='flex'>
            <p className='text-white font-lato font-normal text-12 leading-5'>English</p>
            <DownArrowWhite />
          </div>
        </div>
      </div>
      <div className='xl:flex hidden'>
        <img src={MenCosmetics} alt="" />
        <div className='flex flex-col justify-center'>
          <p className='text-white font-lato text-12 font-bold leading-5'>Weekly Men's Toiletries Coupons.</p>
          <p className='text-gray-400 font-lato text-base font-normal leading-5'>We extend exclusive discounts to our male clientele</p>
        </div>
      </div>
      <div className='flex gap-[40px]'>
        <ComponentSignInButton />
        <FavoritesButton />
        <BlackCardCounter />
      </div>


    </div>
  )
}
