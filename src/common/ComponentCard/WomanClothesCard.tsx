import { Rating } from "@mui/material"
import { WomenClothesProps } from "../../utils/types/types"
import {  FavoriteBorder, FavoriteOutlined} from "@mui/icons-material"

import { useAppDispatch } from "../../redux/hooks/ToolkitHooks"
import { ToggleCart, ToggleFav } from "../../redux/slices/FavoritesSlice"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom"



export const WomanClothesCard = ( cardData: WomenClothesProps ) => {

    const dispatch = useAppDispatch()

    const handleClick = () => dispatch(ToggleFav(cardData.id))

    const handleCartClick = () => dispatch(ToggleCart(cardData.id))

    const navigate = useNavigate()

    
  return (
    <div className="relative min-w-[fit-content] shadow-lg my-3">
        <div className="">
            <img  src={cardData.img} alt="#" />
        </div>
        <div className="flex flex-col p-[20px] justify-evenly  ">
            <div className="flex justify-between">
            <p onClick={()=> navigate(`/${cardData.id}`)}  className="text-[12px] font-bold leading-20">{cardData.name}</p>
            <div onClick={handleClick}>
            {cardData.favorite === true ?  <FavoriteOutlined/> : <FavoriteBorder/>}
                </div>
            </div>
            <p className="text-[10px] font-bold-400 text-[#555555]">{cardData.description}</p>
            <div className="flex gap-[5px]">
                <Rating/>
                {cardData.rating}
            </div>
            <div className="flex gap-[5px]">
                <p className="text-[#FF2E00] font-bold" >{'$'}{cardData.price}</p>
                <p className="text-[#9D9D9D] line-through">{cardData.OriginalPrice}</p>
                <p className="text-[#FF2E00]">{cardData.discount}</p>
            </div>
            <div className="absolute top-3 right-3" onClick={handleCartClick}>
                {cardData.cart === true ? <ShoppingCartIcon/> : <AddShoppingCartIcon/> }
            </div>
            
        </div>
    </div>
  )
}
