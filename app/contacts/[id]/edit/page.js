'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { useContacts } from '@/app/contexts/contactsContext';
import EditContactForm from '@/app/components/EditContactForm';
import Error from '@/app/components/Error';

function Edit() {
  const { id } = useParams();
  const { getContact } = useContacts();
  const contact = getContact(parseInt(id));

  const { name, email, imgURL, phoneNum } = contact;
  return (
    <div className="text-center">
      {contact.error ? (
        <Error id={id} />
      ) : (
        <>
          <h1>Edit Contact</h1>
          <Link className="btn btn-info" href="/contacts">
            Back to Contacts
          </Link>
          <EditContactForm
            contactName={name}
            contactEmail={email}
            contactImgURL={imgURL}
            contactPhoneNum={phoneNum}
            contactID={parseInt(id)}
          />
        </>
      )}
    </div>
  );
}

export default Edit;
