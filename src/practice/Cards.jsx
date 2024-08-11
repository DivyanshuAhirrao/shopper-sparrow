import React, { Fragment, useEffect, useState } from "react";

const Cards = () => {
  let [users, setUsers] = useState([]);

  async function gitUsers() {
    let res = await fetch("https://api.escuelajs.co/api/v1/products");
    let data = await res.json();
    setUsers((users = data));
  }

  useEffect(() => {
    gitUsers();
  }, []);

  let notImageFound=(e)=> {
    e.target.src = "https://demofree.sirv.com/nope-not-here.jpg";
  }

  return (
    <div className="p-20 flex flex-wrap gap-4">
      {users.map((e, index) => {
        return (
          <Fragment key={index}>
            <div className="h-[300px] w-[250px] border-2 border-green-800">
              <img src={e.images[0]} onError={notImageFound} alt="divya" height="250px" width="100%" />
              <div className="w-[100%] h-[50px]">
                <h1 className="text-center font-bold pt-2"> {e.login} </h1>
              </div>
            </div> 
          </Fragment>
        );
      })}
    </div>
  );
};

export default Cards;
