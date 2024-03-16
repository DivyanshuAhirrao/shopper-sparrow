import React, { useState } from "react";
import PosterSwipper from "./PosterSwipper";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import img from "../../media/logo.png";
import flowerpot from "./posters/flowerpot.png";

const Login = () => {
  let [state, setState] = useState({
    email: "",
    password: "",
  });

  let payload = { email: state.email, password: state.password };
  let navigator = useNavigate();

  let { email, password } = state;

  let handleSubmit = (e) => {
    e.preventDefault();

    let postLogin = async () => {
      try {
        let { data } = await axios.post(
          "https://api.escuelajs.co/api/v1/auth/login",
          payload
        );
        console.log(data);
        localStorage.setItem("TOKEN", JSON.stringify(data));
        navigator("/");
      } catch (error) {
        console.log("wrong credentials", error);
        navigator("/login");
      }
    };
    postLogin();
    // name = email;
    // setName(name = email);
    console.log(email, password);
    // alert("form submitted successfully ");
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="h-[100vh] w-[100%] flex">
      <aside className="h-[100%] w-[50%]">
        <div className="bg-white h-[100vh] w-[100%] flex justify-center items-center">
          {/* <Link to="/" className="absolute top-0 right-0 p-2 pt-24">
            BACK
          </Link> */}
          <article className="p-3 border-emerald-800 rounded-md  text-white w-[410px] flex justify-center items-center flex-col gap-6">
            <div className="text-emerald-800  w-[100%] flex justify-start">
              <img src={img} alt="" height="60px" width="50px" />
              <h2
                id="logo-blink"
                className="font-mono font-bold tracking-wider text-[20px]"
              >
                SPARROW SHOPPER
              </h2>
            </div>

            <div className="w-[99%]">
              <h1 className=" font-mono font-bold text-[40px] text-start text-blue-700">
                Login
              </h1>
              <p className="w-[99%] text-[14px] text-[#a3a3a3]">
                {" "}
                Find the Best Styles here !!{" "}
              </p>
            </div>
            <div className=" w-[100%] text-emerald-800 h-[45px] border-2 font-semibold border-emerald-600 flex justify-center items-center gap-2">
              <FcGoogle className="text-[23px]" />
              Login with Google
            </div>

            <div className="w-[75%] text-center relative top-2">
              <fieldset className="border-t-2  border-[#a3a3a35d]"></fieldset>
              <article className="relative bottom-4 text-[#a3a3a3b5] inline-block bg-white px-2">
                or Login with Email{" "}
              </article>
            </div>

            <form
              onSubmit={handleSubmit}
              className=" flex flex-col gap-4 text-[18px] w-[100%]"
            >
              <div className="flex flex-col w-[100%]">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="focus:bg-emerald-100 w-[100%] border-2 border-emerald-600 text-gray-700 font-mono text-[18px] h-[45px] pl-4"
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={handleChange}
                  className="focus:bg-emerald-100 w-[100%] border-2 border-emerald-600 text-gray-700 font-mono text-[18px]  h-[45px] pl-4"
                />
              </div>
              <div className="w-[100%] cursor-pointer text-end text-emerald-800 hover:underline transition-all duration-200 hover:text-red-600">
                Forget Password ?
              </div>
              <button className="w-[100%] bg-gray-900 hover:tracking-widest transition-all duration-200 text-white rounded-md h-[44px] ">
                LOGIN
              </button>
            </form>
          </article>
          <div className="pr-[100px] pb-[65px]">
            <img
              src={flowerpot}
              alt=""
              className="absolute h-[380px] w-[400px] opacity-55 "
            />
          </div>
        </div>
      </aside>
      <aside className="h-[100%] w-[50%]">
        <PosterSwipper />
      </aside>
    </div>
  );
};

export default Login;
