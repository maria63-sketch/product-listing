import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage, 
  setCurrentPage,
  postsPerPage,
  totalPosts, }) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
    
  return (
    <div className="flex items-center justify-center gap-2 py-4 sm:py-5 mt-8">

      {/* previous button */}
      <button 
        onClick={() =>setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center bg-[#F8F4ED] text-[#684B35] border border-[#E8D8C3] rounded-lg hover:bg-[#E8D8C3] px-4 py-2 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
        >
        <ChevronLeft size={20}/>

      </button>
      {/* page number */}
      {pages.map((page) => (
        <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`border rounded-lg px-4 py-2 transition-all duration-300 cursor-pointer 
          ${page === currentPage 
          ? "bg-[#A67C52] text-white border-[#A67C52] shadow-md" 
          : "bg-[#F8F4ED] text-[#684B35] border-[#E8D8C3] hover:bg-[#E8D8C3]"
        }`}
        >
          {page}
        </button>
      ))}

      {/* next button */}
      <button 
      onClick={() => setCurrentPage(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="flex items-center justify-center bg-[#F8F4ED] text-[#684B35] border border-[#E8D8C3] rounded-lg hover:bg-[#E8D8C3] px-4 py-2 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
      >
        <ChevronRight size={20}/>
      </button>
    </div>
  )
}

