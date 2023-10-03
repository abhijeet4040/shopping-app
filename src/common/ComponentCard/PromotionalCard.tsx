import React from "react"
import { PromotionalCardProps } from "../../utils/types/types"



export const PromotionalCard:React.FC<PromotionalCardProps> = ({ title , description, bg , img }) => {
    return (
        <div className="flex min-w-[320px]">
            <div style={{backgroundColor:bg}} className="flex-col flex justify-evenly px-[20px] py-[60px] w-[50%]">
                <p className="text-white font-lato text-md font-extrabold sm:text-3xl leading-10">{title}</p>
                <p className="text-white font-lato text-sm font-normal leading-[36px]">{description}</p>
                <p className="text-white font-lato text-sm font-normal leading-[36px] underline">Explore all category's</p>
            </div>
            <img className="object-cover flex-1 w-[50%]"  src={img} alt="" />
        </div>
    )
}
