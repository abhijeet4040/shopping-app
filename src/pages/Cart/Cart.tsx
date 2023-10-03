import { Add, CheckBox, Delete, Remove } from "@mui/icons-material";
import { ComponentRecommendation } from "../../common/ComponentRecommendation/ComponentRecommendation";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/ToolkitHooks";
import {
  ToggleCart,
  decAmount,
  incAmount,
} from "../../redux/slices/FavoritesSlice";
import { grey } from "@mui/material/colors";

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
        <div className="bg-slate-300 rounded-lg p-5 justify-between">
          <p className="text-lg font-bold">Order Summary</p>
          <div className="flex justify-between">
            <p>Price:</p>
            <p>
              {"$"}
              {totalAmount}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Shipping:</p>
            <p>$0</p>
          </div>
          <div className="flex justify-between">
            <p>Tax</p>
            <p>$0</p>
          </div>
          <div className="flex flex-col justify-between">
            <p>Discount</p>
            <p className="text-sm font-light text-red-600">
              must log in to use Discount code
            </p>
          </div>
          <div className="flex justify-between">
            <CheckBox />
            <p>Pack in gift box</p>
            <p>$10.090</p>
          </div>
          <div className="flex justify-between">
            <p>totalPrice:</p>
            <p>{totalAmount}</p>
          </div>
          <div className="h-[2px] bg-slate-500"></div>
        </div>
      </div>
      <div>
        
      </div>
      <ComponentRecommendation />
    </div>
  );
};
