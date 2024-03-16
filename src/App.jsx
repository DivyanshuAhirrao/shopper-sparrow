import React from "react";
import UI from "./components/UI";
import Navbar from "./components/Navbar";
import GlobalProvider from "./context/GlobalData";
import Slider from "react-slick";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layouts from "./Layouts";
import Home from "./firebase/Home";
import LSForm from "./firebase/LSForm";
import Portals from "./try-react-portals/Portals";
import Modal from "./try-react-portals/Modal";
import CartModal from "./try-react-portals/CartModal";
import NewPractice from "./practice/NewPractice";
import ReducerTrial from "./trials/ReducerTrial";
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
          <Route path="/productDetails" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartModal />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
