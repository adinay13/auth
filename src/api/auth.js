import {createAsyncThunk} from "@reduxjs/toolkit";
import {API} from "../Utils/axiosConfig";

export const SignIn = createAsyncThunk("signIn/auth",async ({ email, password, navigate },{rejectWithValue})=>{
    try{
        const response = await API.post("signin", { email, password })
        localStorage.setItem("token", response)
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
