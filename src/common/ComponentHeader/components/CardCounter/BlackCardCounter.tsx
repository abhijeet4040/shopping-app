import { Add, Delete, Remove } from "@mui/icons-material";
import { CardIconBlack } from "../../../../assets/icons";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../redux/hooks/ToolkitHooks";
import { Counter } from "./Counter/Counter";
import { ToggleCart, decAmount, incAmount } from "../../../../redux/slices/FavoritesSlice";
import { grey } from "@mui/material/colors";

export const BlackCardCounter = () => {
  const favoritesData = useAppSelector(
    (state) => state.Favorites.favoritesData
  );

  const CartArr = favoritesData.filter((card) => card.cart === true);

  const dispatch = useAppDispatch();

  const totalAmount = CartArr.reduce((total, card) => total + card.price * card.amount , 0);

  return (
    <div className="group relative">
      <div className="flex items-center gap-[4px] ">
        <CardIconBlack />
        <div className="text-white font-lato font-normal text-14 leading-5">
          Cart
        </div>
        <Counter />
      </div>

      <div className="absolute hidden group-hover:flex group-hover:flex-col bg-white z-30 gap-4 w-[220px] p-5  right-5 shadow-lg rounded-lg">
        {CartArr.map((card) => (
          <>
            <div className="flex gap-6">
              <img className="w-[38px]" src={card.img} alt="#" />
              <div className="flex flex-col gap-2">
                <p className="text-base font-semibold">{card.name}</p>
                <p className="text-base">
                  {"$"}
                  {card.price}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex">
                  <div onClick={()=> dispatch(incAmount(card.id))}><Add sx={{ color: grey[400] }}/></div>
                  <p>{card.amount}</p>
                  <div onClick={()=>dispatch(decAmount(card.id))}><Remove sx={{ color: grey[400] }} /></div>
                </div>

                <div onClick={() => dispatch(ToggleCart(card.id))}>
                  <Delete />
                </div>
              </div>
            </div>
            <div className="h-[2px] bg-slate-300"></div>
          </>
        ))}
        <div className="flex gap-4">
          <p>Total:</p>
          <p>
            {"$"}
            {totalAmount}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
