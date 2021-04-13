import React from "react";

export const ContactPicker = (props) => {
  const contacts = [...props.contacts];
  const onChange = props.onChange;

  return (
    <select onChange={onChange}>
      <option key={0} defaultValue={null}></option>
      {contacts.map((contact, index) => (
        <option key={index + 1} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
