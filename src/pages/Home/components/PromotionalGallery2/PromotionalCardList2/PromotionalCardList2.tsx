import { PromotionalImage3, PromotionalImage4 } from "../../../../../assets/images"
import { PromotionalCard } from "../../../../../common/ComponentCard/PromotionalCard"


export const PromotionalCardList2 = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-[20px] justify-between">
        <PromotionalCard title={'The Pinky Barbie Edition'} description={'Lets Dress Up'} img={PromotionalImage3} bg="#1D5159" />
        <PromotionalCard title="Best Sellers Everyone Love" description="poolside glam include" img={PromotionalImage4} bg="#BF2E3B" />
    </div>
    </div>
  )
}
