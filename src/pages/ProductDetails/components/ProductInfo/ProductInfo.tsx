import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { CareInstruction } from "./components/CareInstruction/CareInstruction";
import { ProductDetailsList } from "./components/ProductDetails/ProductDetialsList";
import { useState } from "react";

export const ProductInfo = () => {

    const [ShowState, setShowState] = useState(false)

    const  handleClick = () => {
        setShowState(!ShowState)
    }

  return (
    <div className=" flex flex-col items-center gap-10">
      <div className="flex gap-[30px]">
        <p className="font-bold">Product details</p>
        <p className="font-bold text-slate-400">Reviews (5)</p>
        <p className="font-bold text-slate-400">Shipping & Payment</p>
      </div>
      <div className={`grid grid-cols-2 gap-4 ${ShowState === true ? "max-h-[300px]" : "h-auto"}  overflow-hidden`}>
        <div>
          <p className="font-bold text-lg">Product Description</p>
          <p>
            Short dress with a plunging V-neckline and tie detail. Wide sleeves
            falling below the elbow. Contrast bead details. Invisible back zip
            fastening.
          </p>
        </div>
        <ProductDetailsList />
        <div className="flex flex-col gap-4">
          <p className="font-bold text-lg">Composition</p>
          <p>
            We work with monitoring programmes to ensure compliance with our
            social, environmental and health and safety standards for our
            products. To assess compliance, we have developed a programme of
            audits and continuous improvement plans. OUTER SHELL 90% cotton10%
            linen
          </p>
        </div>
        <CareInstruction />
      </div>
      <div>
        <div className="bg-slate-300 h-[2px]"></div>
        <div onClick={handleClick}>
          
            {ShowState === true ?  <div className="flex gap-1"><ArrowDownward/><p>Show More</p></div> : <div className="flex gap-1"><ArrowUpward/><p>Show Less</p></div>}
          
        </div>
      </div>
    </div>
  );
};
