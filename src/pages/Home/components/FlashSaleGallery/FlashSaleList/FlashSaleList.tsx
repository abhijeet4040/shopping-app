import { CountdownCardsData } from "../../../../../utils/DummyData/DummyData"
import { CountdownCard } from "./CountdownCard/CountdownCard"


export const FlashSaleList = () => {
  return (
    <div className="flex gap-[20px] overflow-scroll example ">
        {CountdownCardsData.map((card)=>(
            <CountdownCard key={card.id} {...card}/>
        ))}
    </div>
  )
}
