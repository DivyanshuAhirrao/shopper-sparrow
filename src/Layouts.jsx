import React from "react";
import Navbar from "./components/Navbar";
import UI from "./components/UI";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// import ArrayAddProds from "./trials/ArrayAddProds";

const Layouts = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <UI />
      <Footer />
    </Provider>
  );
};

export default Layouts;
