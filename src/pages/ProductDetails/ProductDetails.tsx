import { ComponentRecommendation } from "../../common/ComponentRecommendation/ComponentRecommendation"
import { ProductDetailsNavbar } from "./components/ProductDetailsNavbar/ProductDetailsNavbar"
import { ProductImage } from "./components/ProductImage/ProductImage"
import { ProductInfo } from "./components/ProductInfo/ProductInfo"


export const ProductDetails = () => {
  return (
    <div className="p-5 sm:p-[50px] xl:p-[90px]">
        <ProductDetailsNavbar/>
        <ProductImage/>
        <ProductInfo/>
        <ComponentRecommendation/>
    </div>
  )
}
