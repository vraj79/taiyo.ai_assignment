import { Contact } from "./types";
import axios from "axios";

export const addContact = (contact: Contact) => ({
  type: "ADD_CONTACT",
  payload: contact,
});

export const editContact = (contact: Contact) => ({
  type: "EDIT_CONTACT",
  payload: contact,
});

export const deleteContact = (id: number) => ({
  type: "DELETE_CONTACT",
  payload: id,
});

export const fetchCasesData = async (api:string) => {
  const response = await axios.get(api);
  console.log(response.data)
  return response.data;
};

export const setCasesData = (data: any) => ({
  type: "SET_CASES_DATA",
  payload: data,
});

export const setMapData = (data: any) => ({
    type: "SET_MAPS_DATA",
    payload: data,
  });