// src/redux/filters/slice.js

import { createSelector } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { selectFilterValue } from './selectors.js';
import { selectItems } from '../contacts/selectors.js';

const slice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

export const selectFilteredContacts = createSelector(
  [selectItems, selectFilterValue],
  (contacts, filter) => {
    if (filter) {
      const filteredByName = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      if (filteredByName.length > 0) {
        return filteredByName;
      } else {
        return contacts.filter(contact =>
          contact.number.toLowerCase().includes(filter.toLowerCase())
        );
      }
    } else return contacts;
  }
);

export const { changeFilter } = slice.actions;
export default slice.reducer;
