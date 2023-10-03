import { createSlice } from "@reduxjs/toolkit";
import { WomenClothesData } from "../../utils/DummyData/DummyData";

const initialState = {

    favoritesData: WomenClothesData
}

export const FavoritesSlice = createSlice({

    name: "Favorites",
    initialState,
    reducers: {
        ToggleFav: (state,action) =>{
            state.favoritesData = state.favoritesData.map((card)=>{
                if(card.id === action.payload){
                    return{
                        ...card,
                        favorite: !card.favorite
                    }
                }
                return card
            })
        },

        ToggleCart: (state,action) => {
            state.favoritesData = state.favoritesData.map((card)=>{
                if(card.id === action.payload){
                    return{
                        ...card,
                        cart: !card.cart
                    }
                }
                return card
            })
        }
    },
})

// eslint-disable-next-line react-refresh/only-export-components
export const {ToggleFav,ToggleCart} = FavoritesSlice.actions 

export default FavoritesSlice.reducer