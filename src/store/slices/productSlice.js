import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from '../../services/productService';

// Fetch products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await productService.getProducts();
    return response.data;
});

// Fetch categories
export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
    const response = await productService.getCategories();
    return response.data;
});

// Fetch products by category
export const fetchProductCategory = createAsyncThunk('products/fetchProductCategory', async (category) => {
    const response = await productService.getProductsByCategory(category);
    return response.data;
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        categories: [],
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loading = false;
            })
            .addCase(fetchProductCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProductCategory.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            });
    },
});

export default productSlice.reducer;
