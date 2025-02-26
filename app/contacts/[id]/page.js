'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { useContacts } from '@/app/contexts/contactsContext';

function Contact() {
  const { id } = useParams();
  const fallbackImageURL = '/defaultProfileIconSmall.png';
  const { getContact } = useContacts();
  const contact = getContact(parseInt(id));

  if (!contact) {
    return <div>Contact not found</div>;
  }

  const { name, email, imgURL, phoneNum } = contact;

  return (
    <div className="container text-center">
      <h1>{name}</h1>
      <Link className="btn btn-info" href="/contacts">
        Back to Contacts
      </Link>
      <img
        className="mx-auto d-block"
        src={imgURL}
        alt="contact"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImageURL;
          e.target.height = 200;
        }}
      />
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNum}</p>
    </div>
  );
}

export default Contact;
