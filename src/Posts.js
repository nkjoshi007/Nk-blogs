import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const Post = createAsyncThunk(
    "Posts/getPosts",async()=>{
        try{
            const data = await axios.get(
                "https://dummyjson.com/products"
            );
            console.log("data of Api:",data)
            return data;
        }
        catch(error){
            console.log(error)
        }
    }
)
const Postslice = createSlice({
    name:"Posts",
    initialstate:{
        data:[],
        dataGet:false,
        message:""
    },
    reducers:{},
    extraReducers:{
        [Post.pending]:(state,{payload})=>{
            console.log("pending",payload);
            state.data=true;
        },
        [Post.fulfilled]:(state,{payload})=>{
            console.log("Fulfilled",payload);
            state.dataGet=true;
            state.message=true;
            state.data=payload.data;
        },
        [Post.rejected]:(state,{payload})=>{
            console.log("Rejected",payload);
            state.dataGet=false;
            state.message=payload;
        }
    } 
})
export default Postslice;