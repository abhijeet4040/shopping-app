import { SendIcon } from "../../../../assets/icons"

export const EmailBox = () => {
    return (
        <div className=" flex justify-center absolute left-[30vw]">
            <div className=" hidden md:flex flex-col justify-center items-center px-[56px] py-[32px] w-[571px] bg-[#7296AB] rounded-lg gap-[23px] ">
                <p className="text-2xl text-white font-bold">ShopHub</p>
                <p className="text-sm text-white">Register your email not to miss the last minutes off+ Free delivery</p>
                <div className="bg-white px-[12px] rounded-lg py-2 flex items-center">
                    <input className="w-auto outline-none" type="text-sm text-[#9D9D9D]" placeholder="Enter your email" />
                    <SendIcon/>
                </div>
            </div>
        </div>
    )
}
