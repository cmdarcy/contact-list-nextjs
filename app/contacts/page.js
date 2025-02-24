'use client'
import React from 'react'
import Link from 'next/link'
import { useContacts } from '../contexts/contactsContext'

function Contacts() {
 const {contacts} = useContacts()
  return (
    <div><h1>All Contacts</h1><Link href={'/contacts/new'}>Add New</Link><ul>{contacts.map((c) => <li key={c.name}>{c.name}</li>)}</ul></div>
  )
}

export default Contacts