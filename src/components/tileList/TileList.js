import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const contactArray = props.contacts;

  return (
    <div>
      {contactArray.map((contact, index) => (
        <Tile contact={contact} key={index} />
      ))}
    </div>
  );
};
