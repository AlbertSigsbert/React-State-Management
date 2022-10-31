import {HiOutlineChevronUp, HiOutlineChevronDown, HiOutlineChevronLeft,HiOutlineChevronRight} from "react-icons/hi2";

function CartItem({id,name,price,img,amount}) {
    return (
       <article className="w-[60%] mx-auto flex flex-col md:flex-row flex-wrap items-center justify-between md:space-y-12">
         <div className="w-32 md:place-self-end">
            <img src={img} alt={name} className="object-contain" />
         </div>

         <div className="mt-8 md:my-0 text-center">
            <h1 className="font-bold">{name}</h1>
            <h2 className="text-gray-700">${price}</h2>
            <button className="text-red-500">Remove</button>
         </div>

         <div className="md:hidden flex my-4">
            <button>
                <HiOutlineChevronLeft className="text-4xl"/>
            </button>
            <p className="text-center text-2xl text-gray-600">{amount}</p>
            <button>
                <HiOutlineChevronRight className="text-4xl"/>
            </button>
         </div>


         <div className="hidden md:block">
            <button>
                <HiOutlineChevronUp/>
            </button>
            <p className="text-center">{amount}</p>
            <button>
                <HiOutlineChevronDown/>
            </button>
         </div>
       </article>
    );
}

export default CartItem;