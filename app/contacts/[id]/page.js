'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { useContacts } from '@/app/contexts/contactsContext';

/**
 * Renders detailed information for a specific contact
 * 
 * @component
 * @returns {JSX.Element} A detailed view of a contact including name, image, email, and phone number
 */
function Contact() {
  const { id } = useParams();
  const fallbackImageURL = '/defaultProfileIconSmall.png';
  const { getContact } = useContacts();
  const contact = getContact(parseInt(id));
  const { name, email, imgURL, phoneNum } = contact;
  const [imageSrc, setImageSrc] = useState(imgURL);

  return (
    <div className="container text-center">
      {contact.error ? (
        // TODO replace with Error Component
        'Contact not found'
      ) : (
        <>
          <h1>{name}</h1>
          <Link className="btn btn-info mb-2" href="/contacts">
            Back to Contacts
          </Link>
          <img
            className="mx-auto d-block"
            src={imageSrc}
            height={200}
            alt="contact"
            onError={() => {
              setImageSrc(fallbackImageURL);
            }}
          />
          <p>Email: {email}</p>
          <p>Phone Number: {phoneNum}</p>
        </>
      )}
    </div>
  );
}

export default Contact;
