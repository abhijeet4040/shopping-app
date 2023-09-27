
import { SideArrow } from '../../../../assets/icons'
import { FlashSaleList } from './FlashSaleList/FlashSaleList'


export const FlashSaleGallery = () => {
  return (
    <div className='p-[20px] flex flex-col gap-[90px] md:p-[50px] xl:p-[90px]'>
      <div className='flex justify-between'>
        <p className='text-black font-lato font-medium text-[20px] sm:text-[28px] leading-5'>Flash Sale</p>
        <div className='flex gap-[3px]'>
          <p className='text-primary-text text-right font-lato text-sm leading-5'>View All</p>
          <SideArrow />
        </div>
      </div>
      <FlashSaleList />
    </div>
  )
}