import CartItem from "./CartItem";
import  { useSelector  } from "react-redux";


function CartContainer(props) {
  const {cartItems, total, amount} = useSelector(store => store.cart);

  if(amount < 1){
    return (
     <section className="my-16 grid place-items-center">
       <header className="text-center">
          <h1 className="text-2xl font-bold uppercase my-8">Your Bag</h1>
          <h2>is currently empty</h2>
       </header>
     </section>
    );
  }
 
  return (
   <section className="my-16 mx-[12%]">
     <header className="text-center">
        <h1 className="text-2xl font-bold uppercase my-8">Your Bag</h1>
     </header>

      <div>
         {cartItems.map(item => {
            return <CartItem key={item.id} {...item } />
         })}
      </div>

      <footer className="my-16" >
        <hr />
        <div className="flex justify-between mt-2 mb-4">
          <div>Total</div>
          <div>${total}</div>
        </div>
         
         <div className="flex justify-center">
         <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Clear Cart</button>
         </div>
     
      </footer>
   </section>
  );
}

export default CartContainer;
