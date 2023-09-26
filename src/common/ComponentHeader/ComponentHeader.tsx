
import { ComponentCategories } from './components/Categories/ComponentCategories'
import { ComponentUserInterface } from './components/ComponentUserInterface/ComponentUserInterface'
import { ComponentNavbar } from './components/navbar/ComponentNavbar'

export const ComponentHeader = () => {
  return (
    <div>
        <ComponentNavbar/>
        <ComponentUserInterface/>
        <ComponentCategories/>
    </div>
  )
}
