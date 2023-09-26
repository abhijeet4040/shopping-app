
import { CategoryLinksData } from "../../../../utils/DummyData/DummyData"

export const ComponentCategories = () => {

  const renderCategoriesLinks = () => {
   return CategoryLinksData.map((link,index) =>{
     return <li className="linkFont whitespace-nowrap" key={index}>{link}</li>
    })
  }

  return (
    <div className="hidden lg:block p-[50px] xl:px-[90px]">
        <ul className="flex justify-between ">
          {renderCategoriesLinks()}
        </ul>
    </div>
  )
}
