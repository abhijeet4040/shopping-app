import { FavoritesIcon } from "../../../../assets/icons"


export const FavoritesButton = () => {
  return (
    <div className="flex gap-[3px]">
        <FavoritesIcon/>
        <p className="text-white font-lato font-normal text-14 leading-5 whitespace-nowrap">Favorites</p>
    </div>
  )
}

