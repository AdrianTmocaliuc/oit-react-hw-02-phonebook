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
    contacts.find((elem) => elem.name === data.name)
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
      console.log(contacts);
      console.log(contact);
      return contact.name.includes(filter);
      // contact.name.toLowercCase().includes(filter.toLowerCase()); //?????
    });
  };

  // filterContacts = () => {
  //   this.state.contacts.filter.toLowerCase().includes(this.state.filter);
  // };

  render = () => {
    return (
      <div className={style.section}>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.formSubmitRegister} />
        <h2>Contacts:</h2>
        <Filter onChange={this.handleFilter} title="Find content by input" />
        <ContactList
          removeContact={this.removeContact}
          // arrContacts={this.state.contacts}
          arrContacts={this.filterContacts()} //??????
        />
      </div>
    );
  };
}

export default App;
