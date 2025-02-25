'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { useContacts } from '@/app/contexts/contactsContext';

function Contact() {
  const { id } = useParams();
  const { getContact } = useContacts();
  const contact = getContact(parseInt(id));

  if (!contact) {
    return <div>Contact not found</div>;
  }

  const { name, email, imgURL, phoneNum } = contact;

  return (
    <div>
      <h1>
        Contact {id}: {name}
      </h1>
      <Link href="/contacts"> Back </Link>
      <img src={imgURL} alt="contact" />
      <p>Email:{email}</p>
      <p>Phone Number: {phoneNum}</p>
    </div>
  );
}

export default Contact;
