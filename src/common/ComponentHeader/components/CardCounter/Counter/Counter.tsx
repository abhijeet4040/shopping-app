import { useAppSelector } from "../../../../../redux/hooks/ToolkitHooks"


export const Counter = () => {

  const FavoritesData = useAppSelector((state)=> state.Favorites.favoritesData)
  
   const SortArr = FavoritesData.filter((card)=> card.cart === true).length

   

  return (
    <div className='w-[25px] rounded-[50%] bg-green-400 '>
        <div className='flex align-middle justify-center text-white text-right font-sans font-normal'>{SortArr}</div>
    </div>
  )
}
