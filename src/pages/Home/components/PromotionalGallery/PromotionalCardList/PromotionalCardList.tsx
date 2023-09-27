
import { PromotionalImage1, PromotionalImage2 } from "../../../../../assets/images"
import { PromotionalCard } from "../../../../../common/ComponentCard/PromotionalCard"


export const PromotionalCardList = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[20px] justify-between">
        <PromotionalCard title={'Never-Ending Summer'} description={'Throwback Shirts & all-day dressed'} img={PromotionalImage1} bg="#0186C4" />
        <PromotionalCard title="The most famous sport brands" description="get in gym essentials" img={PromotionalImage2} bg="#D11FB5" />
    </div>
  )
}
