import { useRouter } from "next/navigation";
import React from "react";

function ContactRow({ name, email, imgURL, phoneNum, id }) {
  const router = useRouter();

  function onContactClickHandler() {
    router.push(`/contacts/${id}`);
  }

  return (
    <div onClick={onContactClickHandler}>
      <img src={imgURL} alt="profileImg" />
      <p>{name}</p>
      <p>{email}</p>
      <p>{phoneNum}</p>
    </div>
  );
}

export default ContactRow;
