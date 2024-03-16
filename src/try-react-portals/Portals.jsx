import React, { useState } from "react";
import Modal from "./Modal";
// import Mod
const Portals = () => {
  const [show, setShow] = useState(false);

  return (
    <section className="flex justify-center items-center h-[100vh]">
      <div className="rounded-[10px] bg-gray-200 h-[300px] w-[300px] flex flex-col gap-10 justify-center items-center">
        <h2>Click to Open Modal</h2>
        <button className="p-2 bg-lime-300 rounded-xl font-bold hover:scale-[1.1]" onClick={() => setShow((s) => !s)}>Open Modal</button>
        <Modal show={show} closeModal={()=> setShow(false)}/>
      </div>
    </section>
  );
};

export default Portals;
