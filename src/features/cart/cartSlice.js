import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../Cart/dummyData";

const initialState = {
    cartItems:cartItems,
    total:0,
    amount:0,
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
       calculateTotals: (state) => {
         let amount = 0;
         let total = 0;

         state.cartItems.map(item => amount += item.amount);
         state.cartItems.map(item =>  total += item.price * item.amount);

         state.amount = amount;
         state.total = total;


       }
    }
});


export const { clearCart,removeItem,increase,decrease,calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;