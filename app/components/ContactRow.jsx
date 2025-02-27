import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useContacts } from '../contexts/contactsContext';

/**
 * Renders a single contact row with image, details, and action buttons
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.name - Contact's name
 * @param {string} props.email - Contact's email
 * @param {string} props.imgURL - URL of contact's profile image
 * @param {string} props.phoneNum - Contact's phone number
 * @param {number} props.id - Unique identifier for the contact
 * @returns {JSX.Element} A row displaying contact information and actions
 */
function ContactRow({ name, email, imgURL, phoneNum, id }) {
  const [imageSrc, setImageSrc] = useState(imgURL);
  const fallbackImageURL = '/defaultProfileIconSmall.png';
  const router = useRouter();
  const { deleteContact } = useContacts();

  /**
   * Handles the deletion of a contact after user confirmation
   */
  function onDeleteClickHandler() {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      deleteContact(id);
    }
  }

  /**
   * Navigates to the edit page for the current contact
   */
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
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imgURL: PropTypes.string,
  phoneNum: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ContactRow;
