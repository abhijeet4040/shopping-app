import { Add, Delete, Remove } from "@mui/icons-material";
import { ComponentRecommendation } from "../../common/ComponentRecommendation/ComponentRecommendation";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/ToolkitHooks";
import {
  ToggleCart,
  decAmount,
  incAmount,
} from "../../redux/slices/FavoritesSlice";
import { grey } from "@mui/material/colors";
import { OrderSummaryBox } from "./Components/OrderSummaryBox/OrderSummaryBox";

export const Cart = () => {
  const CartData = useAppSelector((state) => state.Favorites.favoritesData);

  const CartArr = CartData.filter((card) => card.cart);

  const length = CartArr.length;

  const totalAmount = CartArr.reduce(
    (total, card) => total + card.price * card.amount,
    0
  );

  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row p-5 md:p-[50px] justify-between xl:p-[90px] gap-8">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex gap-8 ">
            <p className="font-semibold text-lg">Card</p>
            <p className="text-slate-400">{length}</p>
          </div>
          <div className="flex flex-col gap-6 ">
            {CartArr.map((card) => (
              <div className="flex justify-between items-center ">
                <div className="flex gap-4">
                  <img
                    className="w-[58px] h-[70] rounded-xl overflow-hidden"
                    src={card.img}
                    alt="#"
                  />
                  <p>{card.name}</p>
                </div>
                <p>{card.price}</p>
                <div className="flex border-slate-400 rounded-xl border-[2px] h-fit">
                  <div onClick={() => dispatch(incAmount(card.id))}>
                    <Add sx={{ color: grey[400] }} />
                  </div>
                  <p>{card.amount}</p>
                  <div onClick={() => dispatch(decAmount(card.id))}>
                    <Remove sx={{ color: grey[400] }} />
                  </div>
                </div>
                <div>{card.price * card.amount}</div>
                <div onClick={() => dispatch(ToggleCart(card.id))}>
                  <Delete />
                </div>
              </div>
            ))}
          </div>
        </div>
        <OrderSummaryBox totalAmount={totalAmount} />
      </div>
      <div>
        
      </div>
      <ComponentRecommendation />
    </div>
  );
};
