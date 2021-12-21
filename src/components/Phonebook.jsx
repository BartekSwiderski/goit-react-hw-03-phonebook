import React, { Component } from "react";
import styles from "./Phonebook.module.css";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import Notiflix from "notiflix";
import { nanoid } from "nanoid";

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
  };
  saveLocalStorageContacts = () => {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  componentDidMount() {
    let localStorageContacts = localStorage.getItem("contacts");
    this.setState({ contacts: JSON.parse(localStorageContacts) });
  }
  componentDidUpdate() {
    this.saveLocalStorageContacts();
  }

  contactExist = (i) => {
    return this.state.contacts.some(({ name }) => name === i);
  };

  changeForm = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  saveContact = (event) => {
    const {
      elements: { name },
    } = event.currentTarget;
    const form = event.target;
    event.preventDefault();
    this.state.contacts.some((contact) => contact.name === name.value)
      ? Notiflix.Notify.failure(`${name.value} is alredy in contacts.`)
      : this.setState(({ name, number, contacts }) => {
          return {
            contacts: [...contacts, { id: nanoid(), name, number }],
            name: "",
            number: "",
          };
        });
    form.reset();
  };

  handleSetFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = (index) => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(({ id }) => id !== index) };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm save={this.saveContact} changeForm={this.changeForm} />

        <h2 className={styles.subtitle}>Contacts</h2>
        <Filter setFilter={this.handleSetFilter} />
        <ContactList filter={filter} data={contacts} del={this.deleteContact} />
      </div>
    );
  }
}

export default Phonebook;
