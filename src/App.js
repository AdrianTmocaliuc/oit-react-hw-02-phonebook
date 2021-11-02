import style from "./App.module.css";
import { Component } from "react";
import { ContactForm, ContactList, Filter } from "./Components/index";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  formSubmitRegister = (data) => {
    const contacts = this.state.contacts;
    contacts.find((elem) => elem.name.toLowerCase() === data.name.toLowerCase())
      ? alert(`${data.name} is alrady in contacts !`)
      : this.setState((oldState) => {
          return {
            contacts: [...oldState.contacts, data],
          };
        });
  };

  removeContact = (id) => {
    this.setState((oldState) => ({
      contacts: oldState.contacts.filter((item) => item.id !== id),
    }));
  };

  handleFilter = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  render = () => {
    return (
      <div className={style.section}>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.formSubmitRegister} />
        <h2>Contacts:</h2>
        <Filter onChange={this.handleFilter} title="Find contacts by name" />
        <ContactList
          removeContact={this.removeContact}
          arrContacts={this.filterContacts()}
        />
      </div>
    );
  };
}

export default App;
