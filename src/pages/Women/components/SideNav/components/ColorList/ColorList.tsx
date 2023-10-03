import { CheckCircle, Circle } from "@mui/icons-material"
import { Checkbox } from "@mui/material"
import { blue, brown, green, grey, orange, pink, purple, red, yellow } from "@mui/material/colors"
import { DownArrow } from "../../../../../../assets/icons"


export const ColorList = () => {
  return (
    <div className="flex flex-col w-[263px] gap-5 p-5">
      <div className="flex justify-between items-center">
      <div className="text-sm gap-5 p-5 font-bold">Colors</div>
      <DownArrow/>
      </div>
        
        <div className="flex flex-wrap">
            <Checkbox color="secondary" icon={<Circle color="secondary"/>} checkedIcon={<CheckCircle/>}/>
            <Checkbox icon={<Circle/>} checkedIcon={<CheckCircle/>} sx={{color:pink[700], '&.Mui-checked':{color:pink[700]}}}/>
            <Checkbox icon={<Circle/>} checkedIcon={<CheckCircle/>} sx={{color:blue[700], '&.Mui-checked':{color:blue[700]}}}/>
            <Checkbox icon={<Circle/>} checkedIcon={<CheckCircle/>} sx={{color:red[700], '&.Mui-checked':{color:red[700]}}}/>
            <Checkbox icon={<Circle/>} checkedIcon={<CheckCircle/>} sx={{color:yellow[700], '&.Mui-checked':{color:yellow[700]}}}/>
            <Checkbox icon={<Circle/>} checkedIcon={<CheckCircle/>} sx={{color:purple[700], '&.Mui-checked':{color:purple[700]}}}/>
            <Checkbox icon={<Circle/>} checkedIcon={<CheckCircle/>} sx={{color:green[700], '&.Mui-checked':{color:green[700]}}}/>
            <Checkbox icon={<Circle/>} checkedIcon={<CheckCircle/>} sx={{color:orange[700], '&.Mui-checked':{color:orange[700]}}}/>
            <Checkbox icon={<Circle/>} checkedIcon={<CheckCircle/>} sx={{color:grey[700], '&.Mui-checked':{color:grey[700]}}}/>
            <Checkbox icon={<Circle/>} checkedIcon={<CheckCircle/>} sx={{color:brown[700], '&.Mui-checked':{color:brown[700]}}}/>
        </div>
        <div className="h-[2px] bg-[#D9D9D9]"></div>
    </div>
  )
}
