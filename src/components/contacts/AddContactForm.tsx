import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Contact } from "../../redux/types";
import { addContact } from "../../redux/actions";
import ContactNavbar from "./ContactNavbar";

const AddContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newContact: Contact = {
      id: Date.now(),
      name,
      email,
      phone,
    };
    dispatch(addContact(newContact));
    setName("");
    setEmail("");
    setPhone(0);
  };

  return (
    <>
    <ContactNavbar/>
      <div className="bg-white shadow p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Contact</h2>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg p-2"
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg p-2"
          />
          <input
            required
            type="number"
            placeholder="Phone"
            value={phone === 0 ? "" : phone}
            onChange={(e) => setPhone(Number(e.target.value))}
            className="border rounded-lg p-2"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 block"
          >Add Contact</button>
        </form>
      </div>
    </>
  );
};

export default AddContactForm;
