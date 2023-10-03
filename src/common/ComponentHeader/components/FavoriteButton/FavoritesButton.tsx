import { FavoriteIconBlack } from "../../../../assets/icons"
import { useAppSelector } from "../../../../redux/hooks/ToolkitHooks"


export const FavoritesButton = () => {

  const favoritesData = useAppSelector((state)=> state.Favorites.favoritesData)

  const favoritesArr = favoritesData.filter(card => card.favorite === true)

  return (
    <div className="flex items-center gap-[3px] relative group">
        <FavoriteIconBlack/>
        <p className="text-white font-lato font-normal text-14 leading-5 whitespace-nowrap">Favorites</p>
        <div className="absolute hidden group-hover:flex group-hover:flex-col bg-white z-30 gap-4 w-[180px] p-5 top-[63px] shadow-lg rounded-lg">
          {
            
            favoritesArr.map((card)=> (
              <>
              <div className="flex gap-6">
                <img className="w-[38px]" src={card.img} alt="#" />
                <div className="flex flex-col gap-2">
                  <p className="text-base font-semibold">{card.name}</p>
                  <p className="text-base">{'$'}{card.price}</p>
                </div>
              </div>
              <div className="h-[2px] bg-slate-300"></div>
              </>
              ))
          }
          <div>
            
            <p></p>
          </div>
          <div>
            
          </div>
        </div>
    </div>
  )
}

