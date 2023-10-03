import { createSlice } from "@reduxjs/toolkit";
import { WomenClothesData } from "../../utils/DummyData/DummyData";

const initialState = {
  favoritesData: WomenClothesData,
};

export const FavoritesSlice = createSlice({
  name: "Favorites",
  initialState,
  reducers: {
    ToggleFav: (state, action) => {
      state.favoritesData = state.favoritesData.map((card) => {
        if (card.id === action.payload) {
          return {
            ...card,
            favorite: !card.favorite,
          };
        }
        return card;
      });
    },

    ToggleCart: (state, action) => {
      state.favoritesData.forEach((item) => {
        if (item.id === action.payload) {
          item.cart = !item.cart;
          item.amount = item.cart ? 1 : 0;
        }
      });
    },

    incAmount: (state, action) => {
      state.favoritesData.forEach((item) => {
        if (item.id === action.payload) {
          item.amount += 1;
          item.cart = item.amount === 1 || item.cart
        }
      });
    },

    decAmount: (state, action) => {
      state.favoritesData.forEach((item) => {
        if (item.id === action.payload) {
          item.amount = Math.max(item.amount - 1, 0); 
          item.cart = item.amount > 0;
          
        }
      });
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { ToggleFav, ToggleCart, incAmount, decAmount } =
  FavoritesSlice.actions;

export default FavoritesSlice.reducer;
