

import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { DownArrow} from "../../../../../../assets/icons"
import { useState } from "react"








export const SizeList = () => {

    const [formats, setFormats] = useState(() => ['bold', 'italic'])

    const handleFormat = (
        event: React.MouseEvent<HTMLElement>,
        newFormats: string[],
    )   => {
        setFormats(newFormats)
    }

  return (
    <div className="flex flex-col w-[263px] gap-5 p-5">
        <div className="text-sm gap-5 p-5 font-bold flex justify-between items-center">
            <p>Size</p>
            <DownArrow/>
        </div>
        <div className="">
            <ToggleButtonGroup className="flex flex-wrap gap-1 "
            value={formats}
            onChange={handleFormat}
            aria-aria-label="text-formatting">
                <ToggleButton className="w-[50px] h-[30px] text-sm  rounded-sm"
                value= '2XS'
                aria-label="bold"
                
                sx={{'&.Mui-selected':{bgcolor:'#D1E2EB'}}}
                >
                2XS
                </ToggleButton>
                <ToggleButton className="w-[50px] h-[30px] rounded-sm"
                value= 'S'
                aria-label="bold"
                sx={{ '&.Mui-selected':{bgcolor:'#D1E2EB'}}}
                >
                S
                </ToggleButton>
                <ToggleButton className="w-[50px] h-[30px] rounded-sm"
                value= 'M'
                aria-label="bold"
                sx={{ '&.Mui-selected':{bgcolor:'#D1E2EB'}}}
                >
                M
                </ToggleButton>
                <ToggleButton className="w-[50px] h-[30px] rounded-sm"
                value= 'L'
                aria-label="bold"
                sx={{ '&.Mui-selected':{bgcolor:'#D1E2EB'}}}
                >
                L
                </ToggleButton>
                <ToggleButton className="w-[50px] h-[30px] rounded-sm"
                value= 'XL'
                aria-label="bold"
                sx={{ '&.Mui-selected':{bgcolor:'#D1E2EB'}}}
                >
                XL
                </ToggleButton>
                <ToggleButton className="w-[50px] h-[30px] rounded-sm"
                value= '2XL'
                aria-label="bold"
                sx={{ '&.Mui-selected':{bgcolor:'#D1E2EB'}}}
                >
                2XL
                </ToggleButton>
                <ToggleButton className="w-[50px] h-[30px] rounded-sm"
                value= '3XL'
                aria-label="bold"
                sx={{ '&.Mui-selected':{bgcolor:'#D1E2EB'}}}
                >
                3XL
                </ToggleButton>
                <ToggleButton className="w-[50px] h-[30px] rounded-sm"
                value= 'XS'
                aria-label="bold"
                sx={{ '&.Mui-selected':{bgcolor:'#D1E2EB'}}}
                >
                XS
                </ToggleButton>
            </ToggleButtonGroup>
        
        </div>
        <div className="h-[2px] bg-[#D9D9D9]"></div>
    </div>
  )
}
