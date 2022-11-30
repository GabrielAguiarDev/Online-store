import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        username: '',
        email: '',
        address: '',
        phone: '',
        wallet: '',
        isLogged: false
    },
    reducers: {
        changeUser(state, { payload }) {
            return {
                ...state,
                isLogged: true,
                name: payload.name,
                username: payload.username,
                email: payload.email,
                address: payload.address,
                phone: payload.phone,
                wallet: payload.wallet,
            }
        },
        logout(state) {
            return {
                ...state, 
                isLogged: false, 
                name: '',
                username: '',
                email: '',
                address: '',
                phone: '',
                wallet: '',
            }
        }
    }
})

export const { changeUser, logout } = slice.actions

export const selectUser = state => state.user

export default slice.reducer