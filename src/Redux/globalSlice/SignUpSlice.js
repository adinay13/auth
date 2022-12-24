import {createSlice} from "@reduxjs/toolkit";
import {SignUp} from "../../api/auth";


const signUpSlice = createSlice({
    name: 'signIn',
    initialState: {
        status: 'active',
        data: [],
        message:''
    }, reducers: {},
    extraReducers:{
        [SignUp.pending]:(state)=>{
            state.status = 'loading'
        },
        [SignUp.fulfilled]:(state, action)=>{
            state.status = 'active'
            state.data = action.payload

        },
        [SignUp.rejected]:(state, action)=>{
            state.status = 'active'
            state.message = action.payload
        }
    }
})
export default signUpSlice;