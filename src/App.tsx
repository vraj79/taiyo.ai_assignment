import { Route, Routes } from "react-router";
import "./App.css";
import AddContactForm from "./components/contacts/AddContactForm";
import ContactList from "./components/contacts/ContactList";
import Homepage from "./components/Homepage";
import LineGraph from "./components/charts/LineGraph";
import MapComponent from "./components/charts/MapComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add-contact" element={<AddContactForm />} />
        <Route path="/contact-list" element={<ContactList />} />
        <Route path="/chart" element={<LineGraph />} />
      </Routes>
    </div>
  );
}

export default App;
