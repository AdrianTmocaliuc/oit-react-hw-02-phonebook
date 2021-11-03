import { PropTypes } from "prop-types";
import style from "./ContactList.module.scss";

export const ContactList = ({ arrContacts, removeContact }) => {
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

ContactList.propTypes = {
  arrContacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  removeContact: PropTypes.func.isRequired,
};
