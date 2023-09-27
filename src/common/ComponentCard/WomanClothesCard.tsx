import { Rating } from "@mui/material"
import { WomenClothesProps } from "../../utils/types/types"
import { FavoriteIconWhite } from "../../assets/icons"


export const WomanClothesCard = ( cardData: WomenClothesProps ) => {
  return (
    <div className="min-w-[260px] h-[480px] shadow-lg">
        <div>
            <img src={cardData.img} alt="#" />
        </div>
        <div className="flex flex-col p-[20px] justify-evenly gap-[12px]">
            <div className="flex justify-between">
            <p className="text-[12px] font-bold leading-20">{cardData.name}</p>
            <FavoriteIconWhite/>
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
            
        </div>
    </div>
  )
}
