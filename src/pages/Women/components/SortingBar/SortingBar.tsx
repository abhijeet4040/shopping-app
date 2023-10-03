import { DownArrow } from "../../../../assets/icons"


export const SortingBar = () => {
  return (
    <div className="bg-[#E9E9E9] p-5 md:px-[50px] xl:px-[90px] md:block hidden">
        <div className="flex justify-between items-center">
            <div className="flex gap-8">
                <p className="text-lg font-bold">Women</p>
                <p className="text-base text-[#555555]">110 items</p>
            </div>
            <div className="flex ">
                <p>sort by order</p>
                <DownArrow/>
            </div>
        </div>
    </div>
  )
}
