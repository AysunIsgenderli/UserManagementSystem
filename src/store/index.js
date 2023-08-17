import { configureStore } from "@reduxjs/toolkit";
import { userReducer, setUserInfo } from "./slices/userSlice";

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export { store, userReducer, setUserInfo }