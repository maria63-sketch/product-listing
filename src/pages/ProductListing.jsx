import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { products } from "../Data/ProductData";
import Pagination from "../Components/Pagination";

export default function ProductListing() {
  const [currentPage, setCurrentPage]= useState(1);
  const [postsPerPage, setPostsPerPage]= useState(4);

  const totalPosts = products.length;

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPost = products.slice(firstIndex, lastIndex)


  return (
    <div className="flex flex-col items-center justify-center mt-4 p-4 sm:p-6 lg:p-8">

      <h1 className="text-3xl sm:text-4xl font-bold text-[#49392E]">
        Skincare Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {currentPost.map((product) => (
          <ProductCard
            key={product.id} 
            image={product.image}
            category={product.category}
            name={product.name}
            price={product.price}
          />   
     ))}
      </div>

      <Pagination
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      postsPerPage={postsPerPage}
      setPostPerPage={setPostsPerPage}
      totalPosts={totalPosts}
      />

    </div>
  )
}
