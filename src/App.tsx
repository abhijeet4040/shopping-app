import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Electronics } from "./pages/Electronics/Electronics"
import { ComponentHeader } from "./common/ComponentHeader/ComponentHeader"
import { ComponentFooter } from "./common/ComponentFooter/ComponentFooter"
import { Women } from "./pages/Women/Women"
import { ProductDetails } from "./pages/ProductDetails/ProductDetails"

export const App = () => {
  return (
    <div className="sm:relative">
      <ComponentHeader/>
      <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="electronics" element = {<Electronics/>} />
      <Route path="women" element = {<Women/>} />
      <Route path="ProductDetails" element = {<ProductDetails/>} />
      </Routes>
      <ComponentFooter/>
    </div>
  )
}

