import { Contact } from "./types";

interface State {
  contacts: Contact[];
}

const initialContactState: State = {
  contacts: [],
};

export const contactReducer = (state = initialContactState, action: any) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "EDIT_CONTACT":
      const editedContacts = state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return {
        ...state,
        contacts: editedContacts,
      };
    case "DELETE_CONTACT":
      const updatedContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: updatedContacts,
      };
    default:
      return state;
  }
};

const initialState = {
  casesData: {},
  countryData: [],
};

export const caseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_CASES_DATA":
      return { ...state, casesData: action.payload };
    case "SET_MAPS_DATA":
      return { ...state, countryData: action.payload };
    default:
      return state;
  }
};
