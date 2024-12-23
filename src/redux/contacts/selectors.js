// src/redux/contacts/selectors.js

export const selectItems = store => store.contacts.items;

export const selectIsLoading = store => store.contacts.isLoading;

export const getError = store => store.contacts.error;
