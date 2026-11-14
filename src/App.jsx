import { Route, Routes } from "react-router-dom"
import ProductListing from "./pages/ProductListing"

function App() {
  return (
    <div className="min-h-screen bg-[#F8F4ED]">
     <Routes>
      <Route path="/" element={<ProductListing/>} />
     </Routes>
    </div>
  )
}

export default App