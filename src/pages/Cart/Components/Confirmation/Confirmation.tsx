import { Payment1, Payment2 } from "../../../../assets/images";
import { ConfirmationProps } from "../../../../utils/types/types";

export const Confirmation: React.FC<ConfirmationProps> = ({ CartArr,}) => {
  return (
    <div className="flex flex-col gap-8 flex-1">
      <p className="text-lg font-bold">Confirmation</p>
      <div className="flex flex-col gap-6 p-6 bg-slate-300">
        <p>Shopping Items</p>
        <div className="flex flex-col gap-3">
          {CartArr.map((card) => (
            <div className="flex justify-between flex-1">
              <div className="flex gap-4">
                <img
                  className="w-[58px] h-[70] rounded-xl overflow-hidden"
                  src={card.img}
                  alt="#"
                />
                <p>{card.name}</p>
              </div>
              <div className="flex flex-col">
                <p>{card.price}</p>
                <p>{card.amount}</p>
              </div>
              <div>{card.price * card.amount}</div>
            </div>
          ))}
          <div className="h-[2px] bg-slate-400"></div>
          <p>payment method</p>
          <div className="flex justify-between">
            <p className="text-semibold">Paypal</p>
            <div><img src={Payment2} alt="#" /></div>
          </div>
          <div className="h-[2px] bg-slate-400"></div>
          <div className="flex justify-between">
            <p className="text-semibold">Shipping Company</p>
            <div><img src={Payment1} alt="#" /></div>
          </div>
          <div className="h-[2px] bg-slate-400"></div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
                <p>Name</p>
                <p></p>
            </div>
            <div className="flex justify-between">
                <p>Phone</p>
                <p></p>
            </div>
            <div className="flex justify-between">
                <p>Address</p>
                <p></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
