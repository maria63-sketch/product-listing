import { ShoppingCart } from "lucide-react";

export default function ProductCard(props) {
  return (
      <div className="flex flex-col w-full h-full min-w-0 border border-[#E8D8C3] rounded-xl shadow-md bg-white hover:-translate-y-2 transition-all duration-300 p-3 sm:p-4 mt-8 cursor-pointer">
        {/* image */}
        <div className="w-full flex items-center justify-center aspect-square rounded-xl overflow-hidden">
          <img
            src={props.image}
            alt={props.name} 
            className="w-full h-full object-cover"
            />
        </div>
        {/* product name */}
        <h1 className="min-h-18 leading-6 text-lg sm:text-xl font-bold text-[#49392E] mt-3">
          {props.name}
        </h1>

        {/* category */}
        <span className="w-fit rounded-full bg-[#E8D8C3] text-xs text-[#684B35] px-3 py-1 mt-2 ">
          {props.category}
        </span>

        {/* price */}
        <p className="text-base font-semibold text-[#A67C52] px-2 mt-2">
          ${props.price}
        </p>

        {/* buttons */}
        <div>
          <button 
            className="w-full inline-flex items-center justify-center gap-1 sm:gap-2  whitespace-nowrap text-white text-sm sm:text-base bg-[#A67C52] hover:bg-[#87613D] rounded-xl px-4 py-2 mt-3 transition-all hover:-translate-y-1 hover:shadow-md duration-300 cursor-pointer">
        <ShoppingCart size={18} className="shrink-0"/>
          Add to Cart
        </button>

         <button 
            className="w-full border-b-4 border-b-[#684B35] text-[#684B35] bg-white hover:bg-[#87613D] hover:text-white rounded-xl px-4 py-2 mt-3 transition-all hover:-translate-y-1 hover:shadow-md duration-300 cursor-pointer">
          Buy Now 
        </button>
        </div>
       
    </div>
  )
}
