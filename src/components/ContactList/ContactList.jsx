import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/slice.js';
import css from './ContactList.module.css';
import { selectFilterValue } from '../../redux/filters/selectors.js';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const filterValue = useSelector(selectFilterValue);

  return filteredContacts.length > 0 ? (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  ) : filterValue.length === 0 ? (
    <p>Add some awesome contact ;)</p>
  ) : (
    <p>No results found ..</p>
  );
};

export default ContactList;
