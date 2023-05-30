import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export const Posts = createAsyncThunk(
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
    reducers:{}
})