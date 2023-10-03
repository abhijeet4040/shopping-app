import { WomanClothesCard } from "../../../../../common/ComponentCard/WomanClothesCard"
import { useAppSelector } from "../../../../../redux/hooks/ToolkitHooks"

export const TopList = () => {

  const FavoritesData = useAppSelector((state)=> state.Favorites.favoritesData)
  return (
    <div className="flex overflow-scroll example gap-[20px]">
        {
            FavoritesData.map((card)=> (
                <WomanClothesCard key={card.id}{...card}/>
            ))
        }
    </div>
  )
}
