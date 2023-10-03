import { MayLike } from "../../assets/images"


export const ComponentRecommendation = () => {
  return (
    <div className="flex flex-col gap-5 items-center p-5 md:p-[50px] xl:p-[90px]">
        
            <p className="font-semibold text-lg">You Might Also Like</p>
            <div className="flex overflow-scroll example">
                <img src={MayLike} alt="#" />
                <img src={MayLike} alt="#" />
                <img src={MayLike} alt="#" />
                <img src={MayLike} alt="#" />
            </div>
        
    </div>
  )
}
