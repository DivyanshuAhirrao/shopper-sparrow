import React from 'react'

const ClothingData = () => {
    return (
      <div className="tooltip-box flex gap-12 w-[500px]">
        <div className="mens-section  border-r-2 pr-10">
          <h1 className="text-[16px] text-emerald-700 font-semibold underline underline-offset-2">
            Mens Section
          </h1>
          <article className="relative top-3 flex gap-10">
            <ul className=" w-[150px]">
              <h2> Topwear </h2>
              <li>T-Shirts</li>
              <li>Casual Shirts</li>
              <li>Formal Shirts</li>
              <li>Sweatshirts</li>
              <li>Sweaters</li>
              <li>Jackets</li>
              <li>Blazers & Coats</li>
              <li>Suits</li>
              <li>Rain Jackets</li>
            </ul>
            <ul>
              <h2>Bottomwear</h2>
              <li>Jeans</li>
              <li>Casual Trousers</li>
              <li>Formal Trousers</li>
              <li>Shorts</li>
              <li className="pb-3">Track Pants & Joggers</li>
              <ul className="border-t-2 pt-1">
                <h2>Accessories</h2>
                <li>Kurtas & Kurta Sets</li>
                <li>Sherwanis</li>
                <li>Nehru Jackets</li>
                <li>Dhotis</li>
              </ul>
            </ul>
          </article>
        </div>
        <div className="womens-section pl-2">
          <h1 className="text-[16px] text-emerald-700 font-semibold underline underline-offset-2">
            Womens Section
          </h1>
          <article className="relative top-3 flex gap-6">
            <ul className=" w-[200px]">
              <h2> Indian & Fusion Wear </h2>
              <li>Kurtas & Suits</li>
              <li>Kurtis, Tunics & Tops</li>
              <li>Sarees</li>
              <li>Ethnic Wear</li>
              <li>Leggings, Salwars & Churidars</li>
              <li>Skirts & Palazzos</li>
              <li>Dress Materials</li>
              <li>Lehenga Cholis</li>
              <li>Dupattas & Shawls</li>
              <li>Jackets</li>
            </ul>
  
            <ul>
              <h2> Western Wear </h2>
              <li>Dresses</li>
              <li>Tops</li>
              <li>Tshirts</li>
              <li>Jeans</li>
              <li>Trousers & Capris</li>
              <li>Shorts & Skirts</li>
              <li>Jumpsuits</li>
              <li>Shrugs</li>
              <li>Sweaters & Sweatshirts</li>
              <li>Jackets & Coats</li>
              <li>Blazers & Waistcoats</li>
            </ul>
          </article>
        </div>
      </div>
    );
  };  

export default ClothingData