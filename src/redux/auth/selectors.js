// src/redux/auth/selectors.js

export const selectIsLoggedIn = store => store.auth.isLoggedIn;

export const selectUser = store => store.auth.user;

export const selectIsError = store => store.auth.isError;

export const selectIsRefreshing = store => store.auth.isRefreshing;

export const selectIsAuthError = store => store.auth.isAuthError;

export const selectIsRegisterError = store => store.auth.isRegisterError;

export const selectIsLoginError = store => store.auth.isLoginError;
