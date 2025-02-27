'use client';

import React from 'react';
import Link from 'next/link';
import { useContacts } from '../contexts/contactsContext';
import ContactRow from '../components/ContactRow';

function Contacts() {
  const { searchTerm, setSearchTerm, filteredContacts } = useContacts();
  return (
    <div>
      <div className="container text-center">
        <h1>All Contacts</h1>
        <Link className="btn btn-primary" href="/contacts/new">
          Add New
        </Link>
      </div>
      <div className="container mt-3 shadow-md bg-secondary-subtle">
        <div className="row">
          <input
            className="input-control"
            type="text"
            placeholder="Filter Contacts"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
        {filteredContacts.map((c, index) => (
          <div
            className={`row my-2 align-items-center text-center justify-content-between rounded ${index % 2 === 0 ? 'bg-body-tertiary' : ''}`}
          >
            <ContactRow
              name={c.name}
              email={c.email}
              imgURL={c.imgURL}
              phoneNum={c.phoneNum}
              key={c.id}
              id={c.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
