import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const GlobalDataApi = createContext("");

const GlobalProvider = ({ children }) => {
  let [users, setState] = useState([]);
  let [inputVal, setInputVal] = useState("");
  let [cartLength, setCartLength] = useState(0);
  let [cartItems, setCartItems] = useState("");
  let [cartProducts, setCartProducts] = useState([]);
  let [cartArray, setCartArray] = useState([]);
  let [productId, setProductId] = useState(1);
  const [products, setProducts] = useState([]);
  let CartSet = [];
  
  let TOKEN = localStorage.getItem("TOKEN");

  let [data, setData] = useState({});

  if(TOKEN){
    useEffect(() => {
      axios
        .get("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: { Authorization: "Bearer " + JSON.parse(TOKEN).access_token },
        })
        .then((e) => {
          setData(e.data);
        });
    }, []);
  }

  

  let myUsers = async () => {
    let responce = await fetch("https://dummyjson.com/products");
    let data = await responce.json();
    setState(data.products);
  };

  useEffect(() => {
    myUsers();
  }, []);

  return (
    <GlobalDataApi.Provider
      value={{
        inputVal,
        setInputVal,
        cartLength,
        setCartLength,
        cartItems,
        setCartItems,
        cartProducts,
        setCartProducts,
        cartArray,
        setCartArray,
        users,
        setState,
        CartSet,
        productId,
        setProductId,
        data,
        TOKEN,
        products, 
        setProducts
      }}
    >
      {children}
    </GlobalDataApi.Provider>
  );
};

export default GlobalProvider;
