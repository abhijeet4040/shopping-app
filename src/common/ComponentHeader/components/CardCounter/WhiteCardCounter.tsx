
CardIconWhite
import { CardIconWhite } from '../../../../assets/icons'
import { Counter } from './Counter/Counter'

export const WhiteCardCounter = () => {
  return (
    <div className='flex gap-[4px] sm:hidden'>
        <CardIconWhite/>
        <Counter/>
    </div>
  )
}
