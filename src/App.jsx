import React from "react";
import GlobalProvider from "./context/GlobalData";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layouts from "./Layouts";
import CartModal from "./components/cart/CartModal";
import ProductDetailsPage from "./components/productDetails/ProductDetailsPage";
import Login from "./components/loginSignup/Login";
import Signup from "./components/loginSignup/Signup";

const App = () => {
  // let router = createBrowserRouter([
  //   {
  //     path : '/home',
  //     element : <Layouts />,
  //     children:[
  //       {
  //         path : '/productDetails',
  //         element : <ProductDetailsPage />
  //       },
  //       {
  //         path : '/cart',
  //         element : <CartModal />
  //       }
  //      ]
  //   }
  // ]);

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productDetails/:productID" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartModal />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
