import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

// Components
// import Counter from './useReducer/Counter';
// import Counter from "./Counter/Counter";
import Cart from "./Cart/Cart";


function App() {
  const { cartItems, isLoading } = useSelector(store => store.cart);
  const dispatch = useDispatch();
  
  //fired when app is loaded
  useEffect(() => {
     dispatch(getCartItems());
  },[dispatch]);

  //fired when cart Item(s) changes
  useEffect(() => {
     dispatch(calculateTotals())
  }, [cartItems, dispatch]);


  if (isLoading) {
    return (
      <div className="mt-20 text-center">
         <h1>Loading...</h1>
      </div>
    )
  }

  return <Cart />;
 
}

export default App;
