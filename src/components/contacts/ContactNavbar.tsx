import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const ContactNavbar = (props: Props) => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white font-semibold text-lg">Contacts</div>
      <div className="space-x-4">
        <Link to={'/add-contact'}  className="text-white hover:underline">
          Add
        </Link>
        <Link to={'/contact-list'}  className="text-white hover:underline">
          View
        </Link>
      </div>
    </nav>
  );
};

export default ContactNavbar;
