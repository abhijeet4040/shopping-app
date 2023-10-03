import { Add, Remove } from "@mui/icons-material";
import { DownArrow } from "../../../../assets/icons";
import {
  ProductImg1,
  ProductImg2,
  ProductImg3,
  ProductImg4,
  ProductImg5,
  ProductImg6,
} from "../../../../assets/images";

import { ProductColors } from "./ProductColors/ProductColors";
import { ProductSize } from "./ProductSize/ProductSize";
import { grey } from "@mui/material/colors";

export const ProductImage = () => {
  return (
    <div className=" flex flex-col md:flex-row p-5 md:p-[50px] xl:p-[90px] justify-center">
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="flex flex-row px-5 py-1 h-[162px] sm:h-auto gap-1 overflow-scroll sm:max-h-auto sm:flex-col example">
          <img className="w-[127px] h-auto" src={ProductImg1} alt="#" />
          <img className="w-[127px] h-auto" src={ProductImg2} alt="#" />
          <img className="w-[127px] h-auto" src={ProductImg3} alt="#" />
          <img className="w-[127px] h-auto" src={ProductImg4} alt="#" />
          <img className="w-[127px] h-auto" src={ProductImg5} alt="#" />
        </div>
        <div className="flex">
          <img src={ProductImg6} alt="#" />
        </div>
      </div>
      <div className="p-5 md:p-[50px] xl:p-[90px]">
        
        <div className="flex flex-col items-start">
        <div>
          <p className="text-base font-bold">SHORT PRINTED DRESS</p>
          <p className="text-base font-semibold">$39.99</p>
        </div>
          <ProductColors />
          <ProductSize />

          <div className="flex flex-col ">
            <p className="text-base font-semibold">Shipping</p>
            <div className="flex  items-center">
              <p className="text-sm font-semibold">
                Free Shipping to Victoria territory
              </p>
              <DownArrow />
            </div>
            <p>Delivery Time: 14-17 days</p>
          </div>
          <div className="flex">
            <p className="text-base font-semibold ">Quantity</p>
            <div className="flex">
                <Add sx={{color: grey[400]}}/>
                <p>4</p>
                <Remove sx={{color: grey[400]}}/>
                <p className="text-base font-semibold">Total:</p>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};
