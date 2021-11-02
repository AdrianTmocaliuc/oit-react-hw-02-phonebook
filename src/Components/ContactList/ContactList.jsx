// import {PropTypes } from "prop-types";
import style from "./ContactList.module.css";

export const ContactList = ({ arrContacts, removeContact }) => {
  // const remove = () => removeContact(id);
  return (
    <ul className={style.list}>
      {arrContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => removeContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
