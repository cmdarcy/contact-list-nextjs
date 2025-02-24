'use client'
import { createContext, useContext, useState } from "react"

const ContactsContext = createContext()

export function ContactsProvider({children}) {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => setContacts([...contacts, contact])

    const contactsContextValue = {contacts, addContact}

    return (
        <ContactsContext.Provider value={contactsContextValue}>
            {children}
        </ContactsContext.Provider>
)
}

export const useContacts = () => useContext(ContactsContext)