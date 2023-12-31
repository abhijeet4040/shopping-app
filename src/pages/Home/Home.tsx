
import { FeaturedImages } from "./components/featuredImages/FeaturedImages"
import { FlashSaleGallery } from "./components/FlashSaleGallery/FlashSaleGallery"
import { IPhoneGallery } from "./components/IPhoneGallery/IPhoneGallery"
import { PromotionalGallery } from "./components/PromotionalGallery/PromotionalGallery"
import { PromotionalGallery2 } from "./components/PromotionalGallery2/PromotionalGallery2"
import { TopGallery } from "./components/TopGallery/TopGallery"
import { TrendingGallery } from "./components/TrendingGallery/TrendingGallery"



export const Home = () => {
  return (
    <div className="">
      
      <FeaturedImages/>
      <FlashSaleGallery />
      <TrendingGallery/>
      <TopGallery/>
      <PromotionalGallery/>
      <IPhoneGallery/>
      <PromotionalGallery2/>
     
      
    </div>
  )
}
