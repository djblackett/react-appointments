import React from "react";

export const Tile = (props) => {
  const obj = props.contact;

  // For map function below: first element gets a classname of 'title-title'. The rest get 'title'
  return (
    <div className="tile-container">
      {Object.values(obj).map((value, index) => (
        <p className={index === 0 ? "title-title" : "title"} key={index}>
          {value}
        </p>
      ))}
    </div>
  );
};
