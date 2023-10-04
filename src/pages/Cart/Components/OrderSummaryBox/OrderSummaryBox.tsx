import { CheckBox } from "@mui/icons-material"
import React from "react"

export type OrderSummaryBoxProps = {
    totalAmount: number,
}


export const OrderSummaryBox:React.FC<OrderSummaryBoxProps> = ({totalAmount}) => {
  return (
    <div>
        <div className="flex flex-col bg-slate-300 rounded-lg p-5 justify-between">
          <p className="text-lg font-bold">Order Summary</p>
          <div className="flex justify-between">
            <p>Price:</p>
            <div className="flex">

              {"$"}
              <p>{totalAmount}</p>
            </div>
            
          </div>
          <div className="flex justify-between">
            <p>Shipping:</p>
            <p>$0</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>$0</p>
          </div>
          <div className="flex flex-col justify-between">
            <p>Discount</p>
            <p className="text-sm font-light text-red-600">
              must log in to use Discount code
            </p>
          </div>
          <div className="flex justify-between">
            <CheckBox />
            <p>Pack in gift box</p>
            <p>$10.090</p>
          </div>
          <div className="flex justify-between">
            <p>totalPrice:</p>
            <p>{totalAmount}</p>
          </div>
          <div className="h-[2px] bg-slate-500"></div>
        </div>
    </div>
  )
}
