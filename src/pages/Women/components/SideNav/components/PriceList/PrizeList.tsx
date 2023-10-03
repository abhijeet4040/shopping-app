import { Slider } from "@mui/material"
import { DownArrow } from "../../../../../../assets/icons"
import { useState } from "react"



export const PriceList = () => {


  const [Val,setVal] = useState([30,40])

  const updateRange = (e:Event,data:number[]|number) => {
    setVal(data as number[])
  }
  return (
    <div  className="flex flex-col w-[263px] gap-5 p-5">
      <div className="flex justify-between items-center">
      <div className="text-sm gap-5 p-5 font-bold">Colors</div>
      <DownArrow/>
      </div>
      <div className="flex justify-between">
        <p className="py-2 px-6 border-[#D9D9D9] border-[2px] rounded-md">{'$'}{Val[0]}</p>
        <p className="py-2 px-6 border-[#D9D9D9] border-[2px] rounded-md">{'$'}{Val[1]}</p>
      </div>
      <div>
          <Slider
          value={Val}
          onChange={updateRange}
          ></Slider>
      </div>
      <div className="h-[2px] bg-[#D9D9D9]"></div>
    </div>
  )
}
