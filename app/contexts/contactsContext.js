'use client';

import { createContext, useContext, useState } from 'react';

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

  const contactsContextValue = {
    contacts,
    addContact,
    getContact,
    deleteContact,
    searchTerm,
    setSearchTerm,
    filteredContacts,
  };

  return (
    <ContactsContext.Provider value={contactsContextValue}>
      {children}
    </ContactsContext.Provider>
  );
}

export const useContacts = () => useContext(ContactsContext);
