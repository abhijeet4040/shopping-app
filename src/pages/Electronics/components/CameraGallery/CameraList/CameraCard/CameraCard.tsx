import React from "react"
import { CameraProps } from "../../../../../../utils/types/types"
import { Rating } from "@mui/material"
import { SideArrowLeft } from "../../../../../../assets/icons"



export const CameraCard:React.FC<CameraProps> = (card) => {
  return (
    <div className="flex flex-col bg-white rounded-md p-5">
        
        <div>
            <img src={card.image} alt="#" />
        </div>
        <div className="flex flex-col gap-2">
            <p className="text-base font-bold">{card.name}</p>
            <Rating/>
            <p className="text-red-700 font-bold">{card.price}</p>
        </div>
    </div>
  )
}
