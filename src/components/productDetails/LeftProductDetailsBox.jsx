import React, { Fragment } from "react";

const LeftProductDetailsBox = ({props}) => {

    let{ images , title} = props;
    console.log(images);

  return (
    <article className="w-[50%] h-[100%] flex flex-col">
      <div className="w-[100%] h-[70%]  flex justify-center items-center">
        <img
          src={images[0]}
          alt={title}
          className="h-[400px] w-[600px] rounded-3xl"
        />
      </div>
      <div className="w-[100%] h-[30%] flex gap-2 justify-center items-center">
        {images.map((e, ind) => {
          return (
            <Fragment key={ind}>     
              <img
                src={e}
                alt={title}
                className="h-[150px] w-[130px] rounded-xl border-2 border-gray-400"
              />
            </Fragment>
          );
        })}
      </div>
    </article>
  );
};

export default LeftProductDetailsBox;
