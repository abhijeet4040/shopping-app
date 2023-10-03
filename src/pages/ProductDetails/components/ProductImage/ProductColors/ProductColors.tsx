import { CheckCircle, Circle } from "@mui/icons-material"
import { Checkbox } from "@mui/material"
import { blue, pink, red, yellow } from "@mui/material/colors"

export const ProductColors = () => {
  return (
    <div className="flex items-center">
            <p className="text-base font-semibold">colors</p>
            <div>
              <Checkbox
                color="secondary"
                icon={<Circle color="secondary" />}
                checkedIcon={<CheckCircle />}
              />
              <Checkbox
                icon={<Circle />}
                checkedIcon={<CheckCircle />}
                sx={{ color: pink[700], "&.Mui-checked": { color: pink[700] } }}
              />
              <Checkbox
                icon={<Circle />}
                checkedIcon={<CheckCircle />}
                sx={{ color: blue[700], "&.Mui-checked": { color: blue[700] } }}
              />
              <Checkbox
                icon={<Circle />}
                checkedIcon={<CheckCircle />}
                sx={{ color: red[700], "&.Mui-checked": { color: red[700] } }}
              />
              <Checkbox
                icon={<Circle />}
                checkedIcon={<CheckCircle />}
                sx={{
                  color: yellow[700],
                  "&.Mui-checked": { color: yellow[700] },
                }}
              />
            </div>
          </div>
  )
}
