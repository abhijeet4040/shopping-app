import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen:  true,
}


export  const NavbarToggleSlice = createSlice({
    name: 'NavbarToggle',
    initialState,
    reducers: {
        toggleNavbar: (state,) => {
            state.isOpen = !state.isOpen
           
        },
        
    }
})

export const { toggleNavbar, } = NavbarToggleSlice.actions

export default NavbarToggleSlice.reducer


