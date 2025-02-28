import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays an error message when a contact with a given ID is not found
 * @function
 * @param {Object} props - Component props
 * @param {string} props.id - The ID of the contact that was not found
 * @returns {JSX.Element} A JSX element displaying an error message
 */

function Error({ id }) {
  return (
    <div className="bg-danger p-4 rounded position-absolute top-50 start-50 translate-middle">
      <h1>Error!</h1>
      <Link className="btn btn-info" href="/contacts">
        Back to Contacts
      </Link>
      <p className="my-3 lead">
        Sorry we could not find the contact with ID: <br />
        <div className="bg-light-subtle my-2 py-2 rounded">
          <strong>{id}</strong>
        </div>
        Please go back and try again!
      </p>
    </div>
  );
}

export default Error;

Error.propTypes = {
  id: PropTypes.string,
};
