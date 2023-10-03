import { SideNav } from "./components/SideNav/SideNav"
import { SortingBar } from "./components/SortingBar/SortingBar"
import { WomenClothesGallery } from "./components/WomenClothesGallery/WomenClothesGallery"
import { WomenNavbar } from "./components/WomenNavbar/WomenNavbar"


export const Women = () => {
  return (
    <div className="flex flex-col ">
        <WomenNavbar/>
        <SortingBar/>
        <div className="flex justify-center sm:justify-normal">
        <SideNav/>
        <WomenClothesGallery/>
        </div>
    </div>
  )
}
