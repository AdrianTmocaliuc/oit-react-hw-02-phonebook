// import {PropTypes } from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { Component } from "react";

import style from "./Form.module.css";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      ...this.state,
      id: uuidv4(),
    });
    this.setState({ name: "", number: "" });
  };

  render = () => {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            id={this.nameInputId}
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            id={this.numberInputId}
            onChange={this.handleChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  };
}
