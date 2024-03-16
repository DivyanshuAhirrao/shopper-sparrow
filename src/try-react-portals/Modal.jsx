import React from 'react'
import { IoMdClose } from "react-icons/io";

const Modal = ({ show , closeModal }) => {
    if(!show) return null;
  return (

    <div className='h-[100vh] w-[100%] bg-red-300 absolute right-0 flex justify-center items-center'>
        <h1>Modal rendered </h1>
        <IoMdClose onClick={closeModal} className='absolute right-[5px] top-1 h-[20px] w-[20px] bg-lime-200 hover:scale-[1.1] transition-all duration-200 cursor-pointer'/>
    </div>
  
    )
}

export default Modal