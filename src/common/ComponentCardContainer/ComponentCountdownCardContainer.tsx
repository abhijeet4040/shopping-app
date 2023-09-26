import React from 'react'
import { SideArrow } from '../../assets/icons'


type CardContainerProps = {
    title:string
}

export const ComponentCardContainer:React.FC<CardContainerProps> = ({title}) => {
  return (
    <div className='p-[20px]'>
        <div className='flex justify-between'>
           <p className='text-black font-lato font-medium text-[20px] sm:text-[28px] leading-5'>{title}</p>
           <div className='flex gap-[3px]'>
            <p className='text-primary-text text-right font-lato text-sm leading-5'>View All</p>
            <SideArrow/>
           </div>
         </div>
         
        
    </div>
  )
}
