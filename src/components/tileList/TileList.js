import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const contactArray = props.contacts;

  return (
    <div>
      <ul>
        {contactArray.map((contact, index) => (
          <li key={index}>
            <Tile contact={contact} key={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};
