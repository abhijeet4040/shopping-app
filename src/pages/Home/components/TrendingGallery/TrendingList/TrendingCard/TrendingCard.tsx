


import { NewArrivals } from '../../../../../../assets/images'
import { TrendingCardDataProps } from '../../../../../../utils/types/types'

export const TrendingCard = (cardData: TrendingCardDataProps) => {



  return (
    <div className='relative min-w-[fit-content] h-auto'>
      <div><img className='rounded-t-[10px]' src={cardData.image} alt="#" /></div>
      {cardData.new && (
        <div>
          <img className='absolute top-3 left-3' src={NewArrivals} alt="#" />
          
        </div>
      )}
      <div className='bg-black rounded-b-[10px] flex p-[20px] justify-between px-3 py-6'>
        <div className='flex flex-col justify-evenly'>
          <p className='text-white font-lato font-semibold text-[16px] leading-6'>{cardData.name}</p>
          <p className='text-base leading-5 text-[14px] text-[#C4C4C4]'>{cardData.description}</p>
        </div>
        <div className='flex items-center border-2 p-[10px] rounded-md gap-1'>
          <p className='text-white text-[14px] font-bold text-base leading-5'>{'$'}{cardData.Price}</p>
          <p className='text-white text-[14px] font-bold text-base leading-5'>Shop Now</p>
        </div>
      </div>
    </div>
  )
}
