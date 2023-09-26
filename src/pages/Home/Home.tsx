import { ComponentCardContainer } from "../../common/ComponentCardContainer/ComponentCountdownCardContainer"
import { ComponentHeader } from "../../common/ComponentHeader/ComponentHeader"
import { FeaturedImages } from "./components/featuredImages/FeaturedImages"



export const Home = () => {
  return (
    <div className="">
      <ComponentHeader/>
      <FeaturedImages/>
      <ComponentCardContainer title = 'Flash Sale' />
    </div>
  )
}
