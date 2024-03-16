import React from 'react'

import imgp1 from "../media/payments/p1.jpg";
import imgp2 from "../media/payments/p2.jpg";
import imgp3 from "../media/payments/p3.jpg";
import imgp4 from "../media/payments/p4.jpg";
import imgp5 from "../media/payments/p5.jpg";
import imgp6 from "../media/payments/p6.jpg";
import imgp7 from "../media/payments/p7.jpg";


const Payments = () => {

    const pays = [imgp1, imgp2, imgp3, imgp4, imgp5, imgp6, imgp7];

  return (
    <div id='blink' className='w-[100%] h-[50px] flex '> 
        {pays.map((pic, index) => {
            return (
              <div key={index}>
                <img
                  src={pic}
                  alt="poster"
                  className=" rounded-[5px] pl-4 hover:scale-[1.1] transition-all duration-500"
                />
              </div>
            );
          })}
    </div>
  )
}

export default Payments
