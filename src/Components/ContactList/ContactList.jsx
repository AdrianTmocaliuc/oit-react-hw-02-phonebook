import { PropTypes } from "prop-types";
import style from "./ContactList.module.css";

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
  arrContacts: PropTypes.arrayOf(
    PropTypes.objectOf({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
