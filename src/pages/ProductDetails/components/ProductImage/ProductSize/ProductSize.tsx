import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useState } from "react";


export const ProductSize = () => {

    const [formats, setFormats] = useState(() => ["bold", "italic"]);

    const handleFormat = (
      event: React.MouseEvent<HTMLElement>,
      newFormats: string[]
    ) => {
      setFormats(newFormats);
    };

  return (
    
    <div className="flex  w-[263px] gap-5 ">
            <p className="text-base font-semibold">Size</p>

            <div className="">
              <ToggleButtonGroup
                className="flex gap-1 "
                value={formats}
                onChange={handleFormat}
                aria-aria-label="text-formatting"
              >
                <ToggleButton
                  className="w-[50px] h-[30px] text-sm  rounded-sm"
                  value="2XS"
                  aria-label="bold"
                  sx={{ "&.Mui-selected": { bgcolor: "#D1E2EB" } }}
                >
                  2XS
                </ToggleButton>
                <ToggleButton
                  className="w-[50px] h-[30px] rounded-sm"
                  value="S"
                  aria-label="bold"
                  sx={{ "&.Mui-selected": { bgcolor: "#D1E2EB" } }}
                >
                  S
                </ToggleButton>
                <ToggleButton
                  className="w-[50px] h-[30px] rounded-sm"
                  value="M"
                  aria-label="bold"
                  sx={{ "&.Mui-selected": { bgcolor: "#D1E2EB" } }}
                >
                  M
                </ToggleButton>
                <ToggleButton
                  className="w-[50px] h-[30px] rounded-sm"
                  value="L"
                  aria-label="bold"
                  sx={{ "&.Mui-selected": { bgcolor: "#D1E2EB" } }}
                >
                  L
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="h-[2px] bg-[#D9D9D9]"></div>
          </div>
  )
}
