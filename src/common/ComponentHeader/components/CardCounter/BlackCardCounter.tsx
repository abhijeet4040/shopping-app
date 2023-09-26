


import { CardIconBlack } from '../../../../assets/icons'
import { Counter } from './Counter/Counter'

export const BlackCardCounter = () => {
  return (
    <div className='flex gap-[4px]'>
        <CardIconBlack/>
        <div className='text-white font-lato font-normal text-14 leading-5'>card</div>
        <Counter/>
    </div>
  )
}