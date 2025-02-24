"use client";
import React, { useState } from "react";
import { useContacts } from "../contexts/contactsContext";
import { useRouter } from "next/navigation";

function NewContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  const { addContact } = useContacts();

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    addContact({ name, email, imgURL, phoneNum });
    router.push("/contacts");
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="imgURL">Image URL</label>
      <input
        type="url"
        id="imgURL"
        value={imgURL}
        onChange={(e) => setImgURL(e.target.value)}
      />
      <label htmlFor="phoneNum">Phone Number</label>
      <input
        type="tel"
        id="phoneNum"
        value={phoneNum}
        onChange={(e) => setPhoneNum(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewContactForm;
