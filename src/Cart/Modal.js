import {useDispatch} from "react-redux";

//actions
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

function Modal(props) {
  const dispatch = useDispatch();
  return (
    <aside className="fixed h-full w-full top-0 left-0 flex items-center justify-center z-10 bg-black/[.08]">
      <div className="modal bg-gray-100 w-[80vw] max-w-sm border-r-4 py-8 px-4 shadow-lg text-center">
        <h1 className="font-bold">
          Remove all your items from shopping cart ?
        </h1>
        <div className="flex justify-around">
          <button
            type="button"
             onClick={() => {
               dispatch(clearCart())
               dispatch(closeModal())
             }}
            className="uppercase mt-4 text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            confirm
          </button>
          <button
            type="button"
            onClick={() => dispatch(closeModal())}
            className="uppercase mt-4 text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
