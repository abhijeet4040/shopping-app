import { SideArrowLeft, SideArrowRight } from "../../../../assets/icons"
import { Iphone } from "../../../../assets/images"


export const IPhoneGallery = () => {
  return (
    <div className="md:flex justify-between bg-[#F7DDD0] items-center hidden md:px-[50px] xl:px-[90px]">
      <SideArrowLeft />
      <div>
        <p>IPHONE</p>
        <p>Snap on a magnetic case, wallet, or both. And get faster wireless charging.</p>
      </div>
      <div className="bg-[#F7DDD0]">
        <img src={Iphone} alt="#" />
      </div>
      <SideArrowRight />
    </div>
  )
}
