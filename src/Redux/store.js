import {configureStore} from "@reduxjs/toolkit";
import signInSlice from "./globalSlice/SignInSlice";
import signUpSlice from "./globalSlice/SignUpSlice";

export const store = configureStore({
    reducer: {
        signIn: signInSlice.reducer,
        signUp: signUpSlice.reducer

    },middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})
