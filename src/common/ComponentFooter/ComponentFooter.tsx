import { EmailBox } from "./components/EmailBox/EmailBox"
import { FooterLinks } from "./components/FooterLinks/FooterLinks"
import { FooterProfile } from "./components/FooterProfile/FooterProfile"


export const ComponentFooter = () => {
  return (
    <div className="">
        <EmailBox/>
        <FooterLinks/>
        <FooterProfile/>
    </div>
  )
}
