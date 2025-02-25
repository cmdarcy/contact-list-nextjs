'use client';

import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ContactsContext = createContext();

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = (contact) => setContacts([...contacts, contact]);
  const getContact = (contactID) => {
    for (const contactObj of contacts) {
      if (contactObj.id === parseInt(contactID)) {
        return contactObj;
      }
    }
  };
  const deleteContact = (contactID) =>
    setContacts(contacts.filter((c) => c.id !== contactID));
  const filteredContacts = !searchTerm
    ? contacts
    : contacts.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
  const editContact = (contactID, updatedContact) => {
    const newContacts = [...contacts];
    const indexToUpdate = newContacts.findIndex((c) => c.id === contactID);
    newContacts[indexToUpdate] = updatedContact;
    setContacts(newContacts);
  };

  const contactsContextValue = {
    contacts,
    addContact,
    getContact,
    deleteContact,
    searchTerm,
    setSearchTerm,
    filteredContacts,
    editContact,
  };

  return (
    <ContactsContext.Provider value={contactsContextValue}>
      {children}
    </ContactsContext.Provider>
  );
}

export const useContacts = () => useContext(ContactsContext);

ContactsProvider.propTypes = {
  children: PropTypes.object,
};
