import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const Post = createAsyncThunk(
    "Post/getPost",async(arg, { rejectWithValue })=>{
        try{
            const data = await axios.get(
                // "https://dummyjson.com/products"
                "https://services.isrostats.in/api/launches"
            );
            console.log("data of Api:",data)
            return data;
        }
        catch(error){
            rejectWithValue(error.response.data)
        }
    }
)
const PostSlice = createSlice({
    name:"Post",
    initialState:{
        data:[],
        isSuccess: false,
    message: "",
    loading: false,
    },
    reducers:{},
    extraReducers:{
        [Post.pending]:(state,{payload})=>{
            console.log("pending",payload);
            state.loading = true;
        },
        [Post.fulfilled]:(state,{payload})=>{
            console.log("Fulfilled",payload);
            state.loading = false;
            state.data = payload.data;
            state.isSuccess = true;
        },
        [Post.rejected]:(state,{payload})=>{
            console.log("Rejected",payload);
            state.message = payload;
      state.loading = false;
      state.isSuccess = false;
        }
    } 
});
export default PostSlice;