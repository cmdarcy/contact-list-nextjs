'use client'
import React from 'react'
import Link from 'next/link'
import { useContacts } from '../contexts/contactsContext'
import ContactRow from '../components/ContactRow'

function Contacts() {
 const {contacts} = useContacts()
  return (
    <div>
        <h1>All Contacts</h1>
        <Link href={'/contacts/new'}>Add New</Link>
            {contacts.map((c) => {
                return <ContactRow name={c.name} email={c.email} imgURL={c.imgURL} phoneNum={c.phoneNum} key={c.name} />})}
    </div>
  )
}

export default Contacts