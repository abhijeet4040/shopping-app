import { WomanClothesCard } from "../../../../../common/ComponentCard/WomanClothesCard"
import { useAppSelector } from "../../../../../redux/hooks/ToolkitHooks"





export const WomenClothesList = () => {

  const FavoritesData = useAppSelector((state)=> state.Favorites.favoritesData)
  
  return (
    <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 p-[20px] md:px-[50px] xl:px-[90px] gap-5 max-h-[1650px] overflow-scroll example">
         {
            FavoritesData.map((card)=>(
            <WomanClothesCard key={card.id}{...card} />
          ))
        }
    </div> 
  )
}
