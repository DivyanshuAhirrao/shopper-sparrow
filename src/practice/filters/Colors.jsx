import React from 'react'

const Colors = () => {
    let colors = [ "blue", 'black', "olive", "cream", "red" ];
    
  return (
    <>
    <section className="border-b-2 border-gray-400">
      {
       colors.map((e,ind) => {
        return (
          <div className="flex" key={ind}>
            <input type="checkbox" className="scale-[1.5]" />
            <p className="pl-3"> {e} </p>
          </div>
        );
      })}
      </section>
    </>
  )
}

export default Colors