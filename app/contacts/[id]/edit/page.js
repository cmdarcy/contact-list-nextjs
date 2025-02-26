'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { useContacts } from '@/app/contexts/contactsContext';
import EditContactForm from '@/app/components/EditContactForm';

function Edit() {
  const { id } = useParams();
  const { getContact } = useContacts();
  const contact = getContact(parseInt(id));

  if (!contact) {
    return <div>Contact not found</div>;
  }

  const { name, email, imgURL, phoneNum } = contact;
  return (
    <div className="text-center">
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
    </div>
  );
}

export default Edit;
