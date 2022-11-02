import {
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

function CartItem({ id, name, price, img, amount }) {
  const dispatch = useDispatch();

  return (
    <article className="w-[60%] mx-auto flex flex-col md:flex-row flex-wrap items-center justify-between md:space-y-12">
      <div className="w-32 md:place-self-end">
        <img src={img} alt={name} className="object-contain" />
      </div>

      <div className="mt-8 md:my-0 text-center">
        <h1 className="font-bold">{name}</h1>
        <h2 className="text-gray-700">${price}</h2>
        <button
          onClick={() => dispatch(removeItem(id))}
          className="text-red-500"
        >
          Remove
        </button>
      </div>

      <div className="md:hidden flex my-4">
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <FaChevronLeft className="text-2xl font-light text-gray-700" />
        </button>
        <p className="text-center text-xl text-gray-600">{amount}</p>
        <button onClick={() => dispatch(increase({ id }))}>
          <FaChevronRight className="text-2xl font-light text-gray-700" />
        </button>
      </div>

      <div className="hidden md:block">
        <button onClick={() => dispatch(increase({ id }))}>
          <FaChevronUp />
        </button>
        <p className="text-center">{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
