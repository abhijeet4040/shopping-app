import { TrendingCardData } from "../../../../../utils/DummyData/DummyData"
import { TrendingCard } from "./TrendingCard/TrendingCard"

export const TrendingList = () => {
  return (
    <div className="flex overflow-scroll gap-[30px] example">
        {
          TrendingCardData.map((card)=>(
            <TrendingCard key={card.id}{...card} />
          ))
        }
    </div>
  )
}
