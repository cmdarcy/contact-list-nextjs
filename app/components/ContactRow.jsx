import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useContacts } from '../contexts/contactsContext';

function ContactRow({ name, email, imgURL, phoneNum, id }) {
  const [imageSrc, setImageSrc] = useState(imgURL);
  const fallbackImageURL = '/defaultProfileIconSmall.png';
  const router = useRouter();
  const { deleteContact } = useContacts();

  function onDeleteClickHandler() {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      deleteContact(id);
    }
  }

  function onEditClickHandler() {
    router.push(`/contacts/${id}/edit`);
  }

  return (
    <>
      <div className="col-lg-2 py-2">
        <img
          src={imageSrc}
          height={80}
          alt="profileImg"
          onError={() => setImageSrc(fallbackImageURL)}
        />
      </div>
      <div className="col-lg-2">
        <Link href={`/contacts/${id}`}>{name}</Link>
      </div>
      <div className="col-lg-2">{email}</div>
      <div className="col-lg-2">{phoneNum}</div>

      <div className="col-lg-auto btn-group btn-group-sm">
        <button
          className="btn btn-danger"
          type="button"
          onClick={onDeleteClickHandler}
        >
          Delete
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={onEditClickHandler}
        >
          Edit
        </button>
      </div>
    </>
  );
}

ContactRow.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  imgURL: PropTypes.string,
  phoneNum: PropTypes.string,
  id: PropTypes.number,
};

export default ContactRow;
