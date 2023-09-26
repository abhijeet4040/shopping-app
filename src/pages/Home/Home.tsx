import { ComponentHeader } from "../../common/ComponentHeader/ComponentHeader"
import { FeaturedImages } from "./components/featuredImages/FeaturedImages"
import { FlashSaleGallery } from "./components/FlashSaleGallery/FlashSaleGallery"
import { TrendingGallery } from "./components/TrendingGallery/TrendingGallery"



export const Home = () => {
  return (
    <div className="">
      <ComponentHeader/>
      <FeaturedImages/>
      <FlashSaleGallery />
      <TrendingGallery/>
    </div>
  )
}
