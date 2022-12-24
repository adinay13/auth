import {createAsyncThunk} from "@reduxjs/toolkit";
import {API} from "../Utils/axiosConfig";

export const SignIn = createAsyncThunk("signIn/auth",async (arg,{rejectWithValue})=>{
    try{
        const response = await API.post("signin", arg)
        return response.data
    }catch (error){
        return rejectWithValue(error.response.data)
    }
})
export const SignUp = createAsyncThunk("signUp/auth", async (data,{rejectWithValue})=>{
    try{
        const response = await API.post("signup", data)
        return response.data
    }catch (error){
        return rejectWithValue(error.response.data)
    }
})
