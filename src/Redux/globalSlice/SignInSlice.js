import {createSlice} from "@reduxjs/toolkit";
import {SignIn} from "../../api/auth";



const signInSlice = createSlice({
    name: 'signIn',
    initialState: {
        status: 'active',
        user: null,
        token: null,
        message:''
    }, reducers:{
        SetCredentials: (state, action)=>{
            const{user, accessToken} = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state, action)=>{
            state.user = null
            state.token = null
            localStorage.removeItem("token")
        },
    },
    extraReducers:{
        [SignIn.pending]:(state)=>{
            state.status = 'loading'
        },
        [SignIn.fulfilled]:(state, action)=>{
            state.status = 'active'
            state.user = action.payload
            localStorage.setItem("token", action.payload.token)

        },
        [SignIn.rejected]:(state, action)=>{
            state.status = 'active'
            state.message = action.payload
        }
    }
})
export default signInSlice;