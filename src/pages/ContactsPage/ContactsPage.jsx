import { useEffect } from 'react';
import ContactList from '../../components/ContactList/ContactList';
import { addContact, fetchContacts } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { selectIsLoading } from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import SearchBox from '../../components/SearchBox/SearchBox';
import css from './ContactsPage.module.css';
import AddContactDialog from '../../components/Dialogs/AddContactDialog/AddContactDialog';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const hanldeContactAdd = values => {
    dispatch(addContact({ ...values }));
  };

  return isRefreshing ? (
    <Loader />
  ) : (
    <div className={css.contactsContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchBox />
          <ContactList />
        </>
      )}
      <AddContactDialog contactAdd={hanldeContactAdd} />
    </div>
  );
};

export default ContactsPage;
