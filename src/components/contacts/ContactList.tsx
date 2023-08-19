import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Contact } from "../../redux/types";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import EditPopup from "./EditPopup";
import { deleteContact } from "../../redux/actions";
import ContactNavbar from "./ContactNavbar";

const ContactList: React.FC = () => {
  const { contacts } = useSelector((state: RootState) => state.contacts);
  const dispatch = useDispatch();

  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const handleEditClick = (contact: Contact) => {
    setEditingContact(contact);
  };

  const handleCloseEdit = () => {
    setEditingContact(null);
  };

  const handleDeleteClick = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ContactNavbar />
      <div className="bg-white shadow p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Contact List</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact: Contact) => (
            <li
              key={contact.id}
              className="border p-4 rounded-lg hover:bg-gray-100 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <img
                  src="https://www.sbmbank.co.in/aboutus/img/m-contact-banner.jpg"
                  alt=""
                  className="w-full object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold capitalize">
                  Full Name: {contact.name}
                </h3>
                <p className="text-gray-600 text-lg">
                  Email Address: {contact.email}
                </p>
                <p className="text-gray-600 text-lg">
                  Phone Number: {contact.phone}
                </p>
              </div>
              <div className="mt-4 flex items-center space-x-4 justify-center">
                <button
                  onClick={() => handleEditClick(contact)}
                  className="text-green-500 hover:text-green-600 bg-white shadow p-3 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(contact.id)}
                  className="text-red-500 hover:text-red-600 bg-white shadow p-3 rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        {editingContact && (
          <EditPopup contact={editingContact} onClose={handleCloseEdit} />
        )}
      </div>
    </>
  );
};

export default ContactList;
