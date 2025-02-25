import React from "react";

function ContactRow({ name, email, imgURL, phoneNum }) {
  return (
    <div>
      <img src={imgURL} alt="profileImg" />
      <p>{name}</p>
      <p>{email}</p>
      <p>{phoneNum}</p>
    </div>
  );
}

export default ContactRow;
