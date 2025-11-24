import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'

export const allGetProducts = createAsyncThunk('products/allGetProducts', async () => {
    const result = await axios.get('https://dummyjson.com/products')
    console.log(result.data.products);
    sessionStorage.setItem('products', JSON.stringify(result.data.products));
    return result.data.products

})
const productSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        dummyAllProducts: [],
        loading: true,
        error: ""
    },
    reducers: {
        searchProduct: (state, action) => {
            state.allProducts = state.dummyAllProducts.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))

        }
    },
    extraReducers: (builder) => {
        builder.addCase(allGetProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload
            state.dummyAllProducts=action.payload
            state.loading = false
            state.error = ""
        })
        builder.addCase(allGetProducts.pending, (state, action) => {
            state.allProducts = []
            state.dummyAllProducts=[]
            state.loading = true
            state.error = ""
        })
        builder.addCase(allGetProducts.rejected, (state, action) => {
            state.allProducts = []
            state.dummyAllProducts=[]
            state.loading = false
            state.error = "Something Went to Wrong !!! API Call Failed"
        })
    }
})
export const { searchProduct } = productSlice.actions
export default productSlice.reducer