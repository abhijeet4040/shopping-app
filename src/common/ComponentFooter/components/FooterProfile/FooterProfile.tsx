import { DownArrow } from "../../../../assets/icons"
import { PaymentImages, SocialImages } from "../../../../assets/images"


export const FooterProfile = () => {
  return (
    <div className="flex flex-col p-[20px] sm:p-[50px] lg:p-[90px] gap-6 ">
        <div className="flex sm:justify-between justify-center">
            <img src={PaymentImages} alt="" />
            <div className="sm:flex items-center hidden ">
              <p>English</p>
              <DownArrow/>
            </div>
        </div>
        <div className="h-[2px] bg-[#D9D9D9] hidden sm:flex"></div>
        <div className="sm:flex justify-between hidden" >
          <p className="text-sm ">165-179 Forster Road City of Monash, Melbourne, Australia</p>
          <p className="text-sm text-[#9D9D9D]">©2023 Copyright in reserved for ShopHub shop</p>
          <img src={SocialImages} alt="#" />
        </div>
    </div>
  )
}
