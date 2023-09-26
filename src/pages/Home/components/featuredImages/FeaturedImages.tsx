

import { FeaturedLeftImage, SummerEssentials } from '../../../../assets/images'
import { ComponentSignInButton } from '../../../../common/ComponentSignInButton/ComponentSignInButton'

export const FeaturedImages = () => {
  return (
    <div className='lg:flex hidden '>
      <div>
        <img className='relative' src={FeaturedLeftImage} alt="#" />
        <img className='w-[228px] h-[150px] absolute top-[500px] left-[433px] hidden xl:block' src={SummerEssentials} alt="#" />
      </div>
      <div className='flex-1 bg-blue-400 flex-col flex justify-center items-center gap-[32px]'>
        <p className='text-white text-center font-lato font-bold text-3xl leading-10 uppercase '>Kimonos, Caftans & underwear</p>
        <p className='text-white text-center font-lato font-medium text-[28px] leading-14'>Poolside glam included From $4.99</p>
        <ComponentSignInButton />
      </div>


    </div>
  )
}
