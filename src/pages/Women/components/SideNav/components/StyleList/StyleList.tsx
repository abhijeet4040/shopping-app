import { Checkbox } from "@mui/material"
import { DownArrow } from "../../../../../../assets/icons"


export const StyleList = () => {
  return (
    <div className=" flex flex-col w-[263px] gap-5 p-5 ">
        <div className="flex justify-between items-center">
        <div className="text-sm w-[263px] gap-5 p-5 font-bold">STYLE</div>
        <DownArrow/>
        </div>
        <div className="flex flex-col gap-5 max-h-[330px] overflow-scroll example">
            <div className="flex items-center text-sm text-[#555555]">
                <Checkbox/>
                <p>Casual</p>
            </div>
            <div className="flex items-center text-sm text-[#555555]">
                <Checkbox/>
                <p>Business casual</p>
            </div>
            <div className="flex items-center text-sm text-[#555555]">
                <Checkbox/>
                <p>Bohemian</p>
            </div>
            <div className="flex items-center text-sm text-[#555555]">
                <Checkbox/>
                <p>Bohemian</p>
            </div>
            <div className="flex items-center text-sm text-[#555555]">
                <Checkbox/>
                <p>Zara</p>
            </div>
            <div className="flex items-center text-sm text-[#555555]">
                <Checkbox/>
                <p>Gucci</p>
            </div>
            <div className="flex items-center text-sm text-[#555555]">
                <Checkbox/>
                <p>Mango</p>
            </div>
            <div className="flex items-center text-sm text-[#555555]">
                <Checkbox/>
                <p>Ralph Lauren</p>
            </div>
            <div className="flex items-center text-sm text-[#555555]">
                <Checkbox/>
                <p>Calvin Klein</p>
            </div>
            
        </div>
        <div className="h-[2px] bg-[#D9D9D9]"></div>
    </div>
  )
}
