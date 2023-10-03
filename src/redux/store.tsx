import {configureStore} from '@reduxjs/toolkit'
import  NavbarToggleSlice  from './slices/NavbarSlice'
import FavoritesSlice from './slices/FavoritesSlice'


 const store = configureStore({
    reducer: {
        NavbarToggle: NavbarToggleSlice,
        Favorites: FavoritesSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store 
