import {createSlice} from "@reduxjs/toolkit";
import {SignUp} from "../../api/auth";
import {getAllUsers} from "../../api/users";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        status: 'active',
        data: [],
        message:''
    }, reducers: {},
    extraReducers:{
        [getAllUsers.pending]:(state)=>{
            state.status = 'loading'
        },
        [getAllUsers.fulfilled]:(state,action)=>{
            state.status = 'active'
            state.data = action.payload
        },
        [getAllUsers.rejected]:(state,action)=>{
            state.status = 'active'
            state.message = action.payload
        }
    }
})
export default usersSlice;