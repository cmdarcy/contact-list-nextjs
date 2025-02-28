'use client';

import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ContactsContext = createContext();

/**
 * Provides a context for managing contacts with various operations
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped by the context provider
 * @returns {JSX.Element} A context provider with contact management functions
 */
export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Adds a new contact to the contacts list
   *
   * @param {Object} contact - The contact to be added
   */
  const addContact = (contact) => setContacts([...contacts, contact]);

  /**
   * Retrieves a specific contact by its ID
   *
   * @param {number} contactID - The ID of the contact to find
   * @returns {Object} The found contact or an error object
   */
  const getContact = (contactID) => {
    try {
      for (const contactObj of contacts) {
        if (contactObj.id === contactID) {
          return contactObj;
        }
      }
      throw new Error(`Sorry could not find contact ${contactID}`);
    } catch (error) {
      console.error(error);
      return {
        name: null,
        email: null,
        imgURL: null,
        phoneNum: null,
        isError: true,
      };
    }
  };

  /**
   * Deletes a contact from the contacts list
   *
   * @param {number} contactID - The ID of the contact to delete
   */
  const deleteContact = (contactID) =>
    setContacts(contacts.filter((c) => c.id !== contactID));

  const filteredContacts = !searchTerm
    ? contacts
    : contacts.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

  /**
   * Edits an existing contact in the contacts list
   *
   * @param {number} contactID - The ID of the contact to edit
   * @param {Object} updatedContact - The updated contact information
   */
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

/**
 * Custom hook to access the contacts context
 *
 * @returns {Object} The contacts context with all contact management functions
 */
export const useContacts = () => useContext(ContactsContext);

ContactsProvider.propTypes = {
  children: PropTypes.node,
};
