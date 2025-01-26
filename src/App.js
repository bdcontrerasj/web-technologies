import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar"; // Asegúrate de que la ruta sea correcta
import Login from "./pages/login/login";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { AuthProvider, useAuth } from "./context/auth-context";
import {ProductDetails} from "./pages/productDetails/productDetails.jsx"
import { PRODUCTS } from "./products";
// Componentes de ejemplo para las rutas

const ProtectedRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" />; // if do not login, jump to login page
};

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <ShopContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/productDetails/:productId" element={<ProductDetails products={PRODUCTS} />} />
            </Routes>
          </ShopContextProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
