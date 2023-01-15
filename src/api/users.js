import {createAsyncThunk} from "@reduxjs/toolkit";
import {API} from "../Utils/axiosConfig";


export const getAllUsers = createAsyncThunk("getAllUsers/users", async (data, {rejectedWithValue})=>{
    try{
        const res = await API.get("users", data)
        return res.data
    }catch (error){
        return rejectedWithValue(error.res.data)
    }
})