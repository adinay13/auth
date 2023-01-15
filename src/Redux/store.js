import {configureStore} from "@reduxjs/toolkit";
import signInSlice from "./globalSlice/SignInSlice";
import signUpSlice from "./globalSlice/SignUpSlice";
import usersSlice from "./globalSlice/usersSlice";

export const store = configureStore({
    reducer: {
        signIn: signInSlice.reducer,
        signUp: signUpSlice.reducer,
        users: usersSlice.reducer

    },middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})
