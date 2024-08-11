import React, { useState } from "react";
import PosterSwipper from "./PosterSwipper";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import img from "../../media/logo.png";
import flowerpot from "./posters/flowerpot.png";
import BackNavigator from "../BackNavigator";

const Signup = () => {
  let navigator = useNavigate();

  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  let { name, email, password, avatar } = state;

  let handleSubmit = (e) => {
    e.preventDefault();
    let postSignupData = async () => {
      let payload = { name, email, password, avatar };
      let { data } = await axios.post(
        "https://api.escuelajs.co/api/v1/users/",
        payload
      );
    };

    postSignupData();
    alert("form submitted successfully ");

    navigator("/login");
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="h-[100vh] w-[100%] flex">
      <BackNavigator />
      <aside className="h-[100%] w-[50%]">
        <div
          // id="login-blink"
          className="bg-white h-[100vh] w-[100%] flex justify-center items-center"
        >
          {/* <Link to="/" className="absolute top-0 right-0 p-2 pt-24">
            BACK
          </Link> */}
          <article className=" p-3 border-emerald-800 rounded-md  text-white w-[410px] flex justify-center items-center flex-col gap-4">
            <div className="text-emerald-800  w-[100%] flex justify-start">
              <img src={img} alt="" height="60px" width="50px" />
              <h2 id="logo-blink" className="font-mono font-bold tracking-wider text-[20px] cursor-pointer" onClick={()=> navigator('/')}>
                SPARROW SHOPPER
              </h2>
            </div>

            <div className="w-[99%]">
              <h1 className=" font-mono font-bold text-[40px] text-start text-emerald-800">
                Signup
              </h1>
              <p className="w-[99%] text-[14px] text-[#a3a3a3]">
                {" "}
                Find the Best Styles here !!{" "}
              </p>
            </div>
            <div className="hover:bg-emerald-100 transition-all duration-200 cursor-pointer w-[100%] text-emerald-800 h-[45px] border-2 font-semibold border-emerald-600 flex justify-center items-center gap-2">
              <FcGoogle className="text-[23px]" />
              Signup with Google
            </div>

            <div className="w-[75%] text-center relative top-2">
              <fieldset className="border-t-2  border-[#a3a3a35d]"></fieldset>
              <article className="relative bottom-4 text-[#a3a3a3b5] inline-block bg-white px-2">
                or Signup with Email{" "}
              </article>
            </div>

            <form
              onSubmit={handleSubmit}
              className=" flex flex-col gap-4 text-[18px] w-[100%]"
            >
              <div className="flex flex-col w-[100%]">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="username"
                  className="focus:bg-emerald-100 w-[100%] placeholder:opacity-55 border-2 border-emerald-600 text-gray-700 font-mono text-[18px]  h-[45px] pl-4"
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="focus:bg-emerald-100 placeholder:opacity-55 w-[100%] border-2 border-emerald-600 text-gray-700 font-mono text-[18px]  h-[45px] pl-4"
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="focus:bg-emerald-100 placeholder:opacity-55 w-[100%] border-2 border-emerald-600 text-gray-700 font-mono text-[18px]  h-[45px] pl-4"
                />
              </div>

              <div className="flex flex-col w-[100%]">
                <input
                  type="url"
                  name="avatar"
                  id="avatar"
                  value={avatar}
                  onChange={handleChange}
                  placeholder="Image URL"
                  className="focus:bg-emerald-100 placeholder:opacity-55 w-[100%] border-2 border-emerald-600 text-gray-700 font-mono text-[18px]  h-[45px] pl-4"
                />
              </div>
              <h2 className="w-[100%] cursor-pointer text-[15px] text-end text-emerald-800 hover:underline transition-all duration-200 hover:text-red-600" onClick={()=> navigator('/login')}>
                Already a Member ! Login Now !!
              </h2>
              <div className="w-[100%] cursor-pointer pl-1 text-emerald-800 hover:underline transition-all duration-200 hover:text-red-600">
                <input
                  type="checkbox"
                  name="t&c"
                  value="accepted"
                  className="scale-150"
                />{" "}
                <span className="text-[13px] font-semibold pl-2 relative bottom-[3px]">By checking you Accept the T&C.</span>
              </div>
              <button className="w-[100%] bg-gray-900 hover:tracking-widest transition-all duration-200 text-white rounded-md h-[44px] ">
                Signup
              </button>
            </form>
          </article>
          <div className="pr-[100px] pb-10">
            <img
              src={flowerpot}
              alt=""
              className="absolute h-[380px] w-[400px] opacity-55"
            />
          </div>
        </div>
      </aside>
      <aside className="h-[100%] w-[50%] m-">
        <PosterSwipper />
      </aside>
    </div>
  );
};

export default Signup;
