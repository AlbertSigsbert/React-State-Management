import Navbar from "./Navbar/Navbar";
import CartContainer from "./CartContainer";
import Modal from "./Modal";
import { useSelector } from "react-redux";

function Cart(props) {
  const { isOpen } = useSelector((store) => store.modal);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default Cart;
