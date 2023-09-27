import React from "react"
import { LinkListProps } from "../../../../../utils/types/types"


export const LinkList:React.FC<LinkListProps> = ({title,link1,link2,link3}) => {

  return (
    <div className="flex flex-col gap-[25px] ">
        <p className="text-base font-bold">{title}</p>
        <div className="flex flex-col gap-[15px] text-[#555555]">
          <p>{link1}</p>
          <p>{link2}</p>
          <p>{link3}</p>
          
        </div>
    </div>
  )
}
