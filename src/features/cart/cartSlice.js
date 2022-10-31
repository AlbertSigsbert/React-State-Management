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
    initialState
});


export default cartSlice.reducer;