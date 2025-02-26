import React from 'react';
import Link from 'next/link';
import NewContactForm from '@/app/components/NewContactForm';

function New() {
  return (
    <div className="container text-center">
      <h1>Add New Contact</h1>
      <Link className="btn btn-info" href="/contacts">
        Back to Contacts
      </Link>
      <NewContactForm />
    </div>
  );
}

export default New;
