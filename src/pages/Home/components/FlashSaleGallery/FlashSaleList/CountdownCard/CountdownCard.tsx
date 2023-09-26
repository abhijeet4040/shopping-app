
import { ColonIcon } from "../../../../../../assets/icons"
import { SaleIcon } from "../../../../../../assets/images"
import { CountdownCardProps } from "../../../../../../utils/types/types"


export const CountdownCard = (cardData: CountdownCardProps) => {
    return (
        <div className="min-w-[220px] h-[380px] rounded-[8px] justify-evenly flex-col flex items-center shadow-lg md:min-w-[396px]">
            <div className="flex flex-col">
                <p className="text-[14px] text-[#9D9D9D]">Deal of the Day</p>
                <div className="flex">
                    <div>
                        <p>{cardData.hours}</p>
                        <p className="text-[14px] text-[#9D9D9D]">Hour</p>
                    </div>
                    <ColonIcon />
                    <div>
                        <p>{cardData.minutes}</p>
                        <p className="text-[14px] text-[#9D9D9D]">Min</p>
                    </div>
                    <ColonIcon />
                    <div>
                        <p>{cardData.seconds}</p>
                        <p className="text-[14px] text-[#9D9D9D]">Sec</p>
                    </div>
                </div>
            </div>
            <div><img src={cardData.image} alt="#" /></div>
            <div className="flex flex-col content-start gap-[5px] ">
                <p>{cardData.name}</p>
                <p>{cardData.description}</p>
                <div></div>
                <div className="flex gap-[5px]">
                    <p className="flex text-[#FF2E00] text-[14px]">{'$'}{cardData.price}</p>
                    <p className="text-[14px] text-[#555555]">$129.99</p>
                    <div><img src={SaleIcon} alt="" /></div>
                </div>
            </div>
        </div>
    )
}
