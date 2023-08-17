import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            username: '',
            password: ''
        }
    },
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload
        }
    }
})

export const { setUserInfo } = userSlice.actions
export const userReducer = userSlice.reducer