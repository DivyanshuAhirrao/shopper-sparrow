import React from "react";

const BeautyData = () => {
  return (
    <div className="tooltip-box flex gap-12 w-[500px]">
      <div className="">
        <article className="beauty-seaction flex gap-10">
          <ul className=" w-[150px]">
            <h2> Makeup </h2>
            <li>Lipstick</li>
            <li>Lip Gloss</li>
            <li>Lip Liner</li>
            <li>Mascara</li>
            <li>Eyeliner</li>
            <li>Kajal</li>
            <li>Eyeshadow</li>
            <li>Foundation</li>
            <li>Primer</li>
            <li>Concealer</li>
            <li>Compact</li>
            <li>Nail Polish</li>
          </ul>
          <ul>
            <h2>Skin, Bath & Body</h2>
            <li>Face Moisturiser</li>
            <li>Cleanser</li>
            <li>Masks & Peel</li>
            <li>Sunscreen</li>
            <li>Serum</li>
            <li>Face Wash</li>
            <li>Eye Cream</li>
            <li>Lip Balm</li>
            <li>Body Lotion</li>
            <li>Body Wash</li>
            <li>Body Scrub</li>
            <li>Hand Cream</li>
          </ul>
          <ul>
            <h2>HairCare</h2>
            <li>Shampoo</li>
            <li>Conditioner</li>
            <li>Hair Cream</li>
            <li>Hair Oil</li>
            <li>Hair Gel</li>
            <li>Hair Color</li>
            <li>Hair Serum</li>
            <li>Hair Accessory</li>
            <ul>
              <h2 className="pt-4">Fragrances</h2>
              <li>Perfume</li>
              <li>Deodorant</li>
              <li>Body Mist</li>
            </ul>
          </ul>
          <ul>
            <h2>Appliances</h2>
            <li>Hair Straightener</li>
            <li>Hair Dryer</li>
            <li>Epilator</li>
            <h2 className="pt-4">Men's Grooming</h2>
            <li>Trimmers</li>
            <li>Beard Oil</li>
            <li>Hair Wax</li>
            <h2 className="pt-4">Beauty Gifts & Set</h2>
            <li>Beauty Gift</li>
            <li>Makeup Kit</li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default BeautyData;
