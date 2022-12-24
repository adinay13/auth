import {configureStore} from "@reduxjs/toolkit";
import signInSlice from "./globalSlice/SignInSlice";
import signUpSlice from "./globalSlice/SignUpSlice";

const store = configureStore({
    reducer: {
        signIn: signInSlice.reducer,
        signUp: signUpSlice.reducer

    }
})
export default store;