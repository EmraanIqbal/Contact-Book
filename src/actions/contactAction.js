// ACtion
import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  GET_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
} from "../constants/Type";

export const createContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});

export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});

export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
});

export const deleteAllContact = () => ({
  type: DELETE_SELECTED_CONTACT,
});
