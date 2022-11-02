import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";

//Components
// import Counter from './useReducer/Counter';
import Cart from "./Cart/Cart";
// import Counter from "./Counter/Counter";

function App() {
  const { cartItems } = useSelector(store => store.cart);
  const dispatch = useDispatch();
  
  useEffect(() => {
     dispatch(calculateTotals())
  }, [cartItems, dispatch]);
  return <Cart />;
 
}

export default App;
