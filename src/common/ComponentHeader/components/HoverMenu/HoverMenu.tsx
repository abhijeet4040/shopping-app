
import { HoverMenuData1, HoverMenuData2, HoverMenuData3, HoverMenuData4, HoverMenuData5, HoverMenuData6, HoverMenuData7 } from "../../../../utils/DummyData/DummyData"
import { HoverList } from "./HoverLIst/HoverList"



export const HoverMenu = () => {

  return (
    
      <>
        <HoverList HovTitle='SHOE & BAG' HovLinks={HoverMenuData1} />
        <HoverList HovTitle='Luxury & designer' HovLinks={HoverMenuData2} />
        <HoverList HovTitle='Home Textile' HovLinks={HoverMenuData3} />
        <HoverList HovTitle='Party Supplies' HovLinks={HoverMenuData4} />
        <HoverList HovTitle='Cosmetics' HovLinks={HoverMenuData5} />
        <HoverList HovTitle='Sport & Outdoors' HovLinks={HoverMenuData6} />
        <div className="row-span-full"><HoverList HovTitle='Clothes' HovLinks={HoverMenuData7} /></div>
        </>
    
  )
}
