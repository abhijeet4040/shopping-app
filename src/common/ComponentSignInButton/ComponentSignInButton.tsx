import { ShopNowIcon } from "../../assets/icons"


export const ComponentSignInButton = () => {
  return (
    <div className="">
        <button className="flex gap-[3px] p-[25px] justify-center rounded-[4px] bg-blue-700 w-[243px]">
            <ShopNowIcon/>
            <p className="text-white text-right font-lato font-medium text-sm leading-5 uppercase">Shop Now</p>
        </button>
    </div>
  )
}
