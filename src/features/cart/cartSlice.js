import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../Cart/dummyData";

const initialState = {
    cartItems:cartItems,
    total:0,
    amount:4,
    isLoading:true
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
       clearCart: (state) => {
         state.cartItems = []
       },
       removeItem: (state, action) => {
         const itemId = action.payload;
         state.cartItems = state.cartItems.filter(item => item.id !== itemId);
       },
       increase: (state, {payload}) => {
         const cartItem = state.cartItems.find(item => item.id === payload.id);
         cartItem.amount = cartItem.amount + 1;
       },
       decrease: (state, {payload}) => {
         const cartItem = state.cartItems.find(item => item.id === payload.id);
         cartItem.amount = cartItem.amount - 1;
       },
    }
});


export const { clearCart,removeItem,increase,decrease } = cartSlice.actions;
export default cartSlice.reducer;