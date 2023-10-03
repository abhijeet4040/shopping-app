import { BlackCategoriesIcon } from "../../../../../../assets/icons"


export const ToggleNavButton = () => {
  return (
    <div>
        <button  className="flex gap-4">
        <BlackCategoriesIcon />
        <p className="text-base font-bold ">All Categories</p>
      </button>
    </div>
  )
}
