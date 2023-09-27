import { FavoriteIconBlack } from "../../../../assets/icons"


export const FavoritesButton = () => {
  return (
    <div className="flex items-center  gap-[3px]">
        <FavoriteIconBlack/>
        <p className="text-white font-lato font-normal text-14 leading-5 whitespace-nowrap">Favorites</p>
    </div>
  )
}

