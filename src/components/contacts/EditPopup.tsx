// src/components/EditPopup.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Contact } from "../../redux/types";
import { editContact } from "../../redux/actions";

interface EditPopupProps {
  contact: Contact;
  onClose: () => void;
}

const EditPopup: React.FC<EditPopupProps> = ({ contact, onClose }) => {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const editedContact: Contact = {
      ...contact,
      name,
      email,
      phone,
    };
    dispatch(editContact(editedContact));
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white shadow p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Contact</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg p-2 mb-2"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-lg p-2 mb-2"
        />
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(Number(e.target.value))}
          className="border rounded-lg p-2 mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 ml-4 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;
