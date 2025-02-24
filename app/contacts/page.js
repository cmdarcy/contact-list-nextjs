import React from 'react'
import Link from 'next/link'

function Contacts() {
  return (
    <div><h1>All Contacts</h1><Link href={'/contacts/new'}>Add New</Link></div>
  )
}

export default Contacts