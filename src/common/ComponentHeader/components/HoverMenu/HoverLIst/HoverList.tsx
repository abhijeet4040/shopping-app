import React from "react"
import { HoverCard } from "./HoverCard/HoverCard"
import { hoverListProps } from "../../../../../utils/types/types"


export const HoverList:React.FC<hoverListProps> = ({HovLinks,HovTitle}) => {
  return (
    <div className="flex flex-col gap-[16px]">
        <p className="text-sm font-bold text-[#262626]">{HovTitle}</p>
        <div className="flex flex-col gap-2 text-[#555555] text-xs">
        {HovLinks.map((link, index)=>(
            <HoverCard key={index} link={link}/>
        ))}
        </div>
    </div>
  )
}
