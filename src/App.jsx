import './App.css';
import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import ContactForm from './Components/ContactForm/ContactForm';
import { Section, Heading } from './App.styled';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactNames = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

  addContact = contact =>
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          ...contact,
        },
      ],
    }));

  deleteContact = evt => {
    const targetId = evt.target.id;
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== targetId),
    }));
  };
  filterContacts = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };
  dublicateNameCheck = name =>
    this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

  render() {
    return (
      <>
        <Heading>Phonebook</Heading>
        <ContactForm
          dublicateNameCheck={this.dublicateNameCheck}
          addContact={this.addContact}
        />
        <Section title="Contacts">Contacts</Section>
        <Filter
          filterContacts={this.filterContacts}
          filter={this.state.filter}
        />
        <ContactList
          contactNames={this.contactNames}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
