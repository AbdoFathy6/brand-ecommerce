import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.find((product) => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                const productClone = { ...action.payload, quantity: 1 };
                state.push(productClone);
            }
            saveCartToLocalStorage(state);
        },
        removeFromCart: (state, action) => {
            const updatedCart = state.filter(item => item.id !== action.payload.id);
            saveCartToLocalStorage(updatedCart);
            return updatedCart;
        },
        clearCart: (state) => {
            state.length = 0;
            saveCartToLocalStorage(state);
        },
        updateQuantity: (state, action) => {
            const updatedState = state.map(product =>
                product.id === action.payload.id
                    ? { ...product, quantity: action.payload.quantity }
                    : product
            );
            saveCartToLocalStorage(updatedState);
            return updatedState;
        },
    },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
