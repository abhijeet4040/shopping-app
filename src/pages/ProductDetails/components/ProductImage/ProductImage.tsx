import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import { DownArrow } from "../../../../assets/icons";
import {
  ProductImg1,
  ProductImg2,
  ProductImg3,
  ProductImg4,
  ProductImg5,
  ProductImg6,
} from "../../../../assets/images";

import { ProductColors } from "./ProductColors/ProductColors";
import { ProductSize } from "./ProductSize/ProductSize";
import { grey } from "@mui/material/colors";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../redux/hooks/ToolkitHooks";
import { useParams } from "react-router-dom";
import { ToggleCart, decAmount, incAmount } from "../../../../redux/slices/FavoritesSlice";

export const ProductImage = () => {
  const ProductArr = useAppSelector((state) => state.Favorites.favoritesData);

  const params = useParams();

  const dispatch = useAppDispatch();

  if (!params.id) {
    return <div>Product Not Found</div>;
  }

  const prodId = parseInt(params.id);

  const Card = ProductArr.find((item) => item.id === prodId);

  if (!Card) {
    return <div>Product not Found</div>;
  }

  const total = Card.price * Card.amount;

  return (
    <div className=" flex flex-col xl:flex-row  gap-8  justify-center">
      <div className="flex flex-col-reverse gap-2 md:flex-row ">
        <div className="flex flex-row md:px-5 md:py-1 gap-1 md:flex-col example overflow-scroll">
          <img className="rounded-lg"  src={ProductImg1} alt="#" />
          <img className="rounded-lg" src={ProductImg2} alt="#" />
          <img className="rounded-lg" src={ProductImg3} alt="#" />
          <img className="rounded-lg" src={ProductImg4} alt="#" />
          <img className="rounded-lg" src={ProductImg5} alt="#" />
        </div>
        
        <img src={ProductImg6} alt="#" />
        
      </div>
      <div className="">
        <div className="flex flex-col items-start gap-8">
          <div>
            <p className="text-lg font-bold">{Card.name}</p>
            <p className="text-base font-semibold">
              {"$"}
              {Card?.price}
            </p>
          </div>
          <ProductColors />
          <ProductSize />

          <div className="flex flex-col ">
            <p className="text-base font-semibold">Shipping</p>
            <div className="flex  items-center">
              <p className="text-sm font-semibold">
                Free Shipping to Victoria territory
              </p>
              <DownArrow />
            </div>
            <p>Delivery Time: 14-17 days</p>
          </div>
          <div className="flex">
            <p className="text-base font-semibold ">Quantity</p>
            <div className="flex">
              <div onClick={() => dispatch(incAmount(Card.id))}>
                <Add sx={{ color: grey[400] }} />
              </div>
              <p>{Card.amount}</p>
              <div onClick={() => dispatch(decAmount(Card.id))}>
                <Remove sx={{ color: grey[400] }} />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-base font-semibold">Total:</p>
            <p>{'$'}{total}</p>
          </div>
              <div onClick={() => dispatch(ToggleCart(Card.id))} className="flex gap-2 p-4 bg-[#4172DC] rounded-lg text-white">
                <AddShoppingCart/>
                { Card.cart === false ? <div>Add to Cart</div> : <div>Remove from Cart</div>}
              </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};
