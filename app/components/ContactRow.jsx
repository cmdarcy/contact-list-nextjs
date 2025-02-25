import { useRouter } from "next/navigation";
import React from "react";
import { useContacts } from "../contexts/contactsContext";
import PropTypes from "prop-types";

function ContactRow({ name, email, imgURL, phoneNum, id }) {
  const router = useRouter();
  const { deleteContact } = useContacts();

  function onContactClickHandler() {
    router.push(`/contacts/${id}`);
  }

  function onDeleteClickHandler() {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      deleteContact(id);
    }
  }

  return (
    <div>
      <img src={imgURL} alt="profileImg" />
      <p onClick={onContactClickHandler}>{name}</p>
      <p>{email}</p>
      <p>{phoneNum}</p>
      <button onClick={onDeleteClickHandler}>Delete</button>
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
