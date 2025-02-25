'use client'
import React from 'react'
import Link from 'next/link'
import { useContacts } from '../contexts/contactsContext'
import ContactRow from '../components/ContactRow'

function Contacts() {
 const {searchTerm, setSearchTerm, filteredContacts} = useContacts()
  return (
    <div>
        <h1>All Contacts</h1>
        <input type='text' placeholder='Filter Contacts' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}/>
        <Link href={'/contacts/new'}>Add New</Link>
            {filteredContacts.map((c) => {
                return <ContactRow name={c.name} email={c.email} imgURL={c.imgURL} phoneNum={c.phoneNum} key={c.id} id={c.id} />})}
    </div>
  )
}

export default Contacts