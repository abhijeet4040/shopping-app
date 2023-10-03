import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Electronics } from "./pages/Electronics/Electronics"
import { ComponentHeader } from "./common/ComponentHeader/ComponentHeader"
import { ComponentFooter } from "./common/ComponentFooter/ComponentFooter"
import { Women } from "./pages/Women/Women"
import { ProductDetails } from "./pages/ProductDetails/ProductDetails"
import { Cart } from "./pages/Cart/Cart"

export const App = () => {
  return (
    <div className="sm:relative">
      <ComponentHeader/>
      <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="electronics" element = {<Electronics/>} />
      <Route path="women" element = {<Women/>} />
      <Route path=":id" element = {<ProductDetails/>} />
      <Route path="/cart" element ={<Cart/>} />
      </Routes>
      <ComponentFooter/>
    </div>
  )
}

