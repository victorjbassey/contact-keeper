import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  FILTER_CONTACT
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Rachel Green",
        email: "rach@gmail.com",
        phone: "111-111-111",
        type: "personal"
      },
      {
        id: 2,
        name: "Ross Geller",
        email: "rossy@gmail.com",
        phone: "122-131-002",
        type: "personal"
      },
      {
        id: 3,
        name: "Joey Tribbiani",
        email: "joey@gmail.com",
        phone: "137-453-908",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contact

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
