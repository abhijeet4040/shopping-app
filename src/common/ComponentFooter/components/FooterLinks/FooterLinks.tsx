import { LinkList } from "./LinkList/LinkList"

export const FooterLinks = () => {

  
  return (
    <div className="relative mt-[100px] bg-[#D1E2EB] grid grid-cols-2 p-[60px] pt-[132px] gap-x-[100px] gap-y-[40px] lg:flex content-center justify-center">
      <LinkList title={'Company'} link1={'About Us'} link2={'Our Store'} link3={'Contact us'}/>
      <LinkList title={'Career Opportunities'} link1={'About Us'} link2={'Our Store'} link3={'Contact us'}/>
      <LinkList title={'How to Buy'} link1={'Making Payments'} link2={'Buyer Protection'} link3={'Delivery Options'}/>
      <LinkList title={'Contact Us'} link1={'FAQ'} link2={'Our Store'} link3={'Help'}/>
    </div>
  )
}
