'use client'
import { useContacts } from '@/app/contexts/contactsContext'
import Link from 'next/link'
import { useParams} from 'next/navigation'
import React from 'react'

function Contact() {
    const {id} = useParams()
    const {getContact} = useContacts()
    const {name, email, imgURL, phoneNum} = getContact(id)

  return (
    <div>
        <h1>Contact {id}: {name}</h1>
        <Link href='/contacts'> Back </Link>
        <img src={imgURL}/>
        <p>Email:{email}</p>
        <p>Phone Number: {phoneNum}</p>
    </div>
  )
}

export default Contact