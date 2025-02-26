import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useContacts } from '../contexts/contactsContext';

function ContactRow({ name, email, imgURL, phoneNum, id }) {
  const [imageSrc, setImageSrc] = useState(imgURL);
  const fallbackImageURL = '/defaultProfileIconSmall.png';
  const router = useRouter();
  const { deleteContact } = useContacts();

  function onContactClickHandler() {
    router.push(`/contacts/${id}`);
  }

  function onDeleteClickHandler() {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      deleteContact(id);
    }
  }

  function onEditClickHandler() {
    router.push(`/contacts/${id}/edit`);
  }

  return (
    <div>
      <img
        src={imageSrc}
        alt="profileImg"
        onError={() => setImageSrc(fallbackImageURL)}
      />
      <p onClick={onContactClickHandler}>{name}</p>
      <p>{email}</p>
      <p>{phoneNum}</p>
      <button type="button" onClick={onDeleteClickHandler}>
        Delete
      </button>
      <button type="button" onClick={onEditClickHandler}>
        Edit
      </button>
    </div>
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
