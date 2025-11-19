import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const allGetProducts = createAsyncThunk('products/allGetProducts', async () => {
    const result = await axios.get('https://dummyjson.com/products')
    console.log(result.data.products);
    return result.data.products

})
const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        loading: true,
        error: ""
    },
    extraReducers:(builder)=>{
       builder.addCase(allGetProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.loading=false
            state.error=""
       })
        builder.addCase(allGetProducts.pending,(state,action)=>{
            state.allProducts=[]
            state.loading=true
            state.error=""
       })
        builder.addCase(allGetProducts.rejected,(state,action)=>{
            state.allProducts=[]
            state.loading=false
            state.error="Something Went to Wrong !!! API Call Failed"
       })
    }
})
export default productSlice.reducer