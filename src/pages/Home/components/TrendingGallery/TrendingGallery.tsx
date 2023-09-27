import { SideArrow } from "../../../../assets/icons"
import { TrendingList } from "./TrendingList/TrendingList"


export const TrendingGallery = () => {
  return (
    <div className='p-[20px] flex flex-col gap-[90px] md:p-[50px] xl:p-[90px]'>
      <div className='flex justify-between'>
        <p className='text-black font-lato font-medium text-[20px] sm:text-[28px] leading-5'>Trending Must Haves</p>
        <div className='flex gap-[3px]'>
          <p className='text-primary-text text-right font-lato text-sm leading-5'>View All</p>
          <SideArrow />
        </div>
      </div>
      <TrendingList/>
    </div>
  )
}
