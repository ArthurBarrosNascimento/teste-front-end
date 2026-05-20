import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Orders from "./pages/OrdersProducts"
import FavoriteProducts from "./pages/FavoriteProducts"
import UserProfile from "./pages/UserProfile"
import Cart from "./pages/Cart"
import ProductCollections from "./pages/ProductCollections"

function App() {
  
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/orders" element={<Orders /> }/>
      <Route path="/favorite_products" element={<FavoriteProducts/> }/>
      <Route path="/user_profile" element={<UserProfile/> }/>
      <Route path="/cart" element={<Cart /> }/>
      <Route path="/product_collection" element={ <ProductCollections /> } />
    
    </Routes>
  </BrowserRouter>
  </>)
}

export default App
