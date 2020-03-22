import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
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
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = uuidv4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };

  // Delete contact
  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  };

  // Set current contact
  const setCurrent = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };

  // Update contact
  const updateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  };

  // Filter contact
  const filterContacts = text => {
    dispatch({
      type: FILTER_CONTACT,
      payload: text
    });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        setCurrent,
        clearCurrent,
        addContact,
        deleteContact,
        updateContact,
        filterContacts,
        clearFilter
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
