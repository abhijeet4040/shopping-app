import { WomanClothesCard } from "../../../../../common/ComponentCard/WomanClothesCard"
import { WomenClothesData } from "../../../../../utils/DummyData/DummyData"

export const TopList = () => {
  return (
    <div className="flex overflow-scroll example gap-[20px]">
        {
            WomenClothesData.map((card)=> (
                <WomanClothesCard key={card.id}{...card}/>
            ))
        }
    </div>
  )
}
