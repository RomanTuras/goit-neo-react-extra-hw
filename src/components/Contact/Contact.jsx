import css from './Contact.module.css';
import {
  deleteContact,
  updateContact,
} from '../../redux/contacts/operations.js';
import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import AlertDialog from '../Dialogs/AlertDialog/AlertDialog.jsx';
import EditContactDialog from '../Dialogs/EditContactDialog/EditContactDialog.jsx';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleUpdateContact = ({ id, name, number }) => {
    if (name == contact.name && number == contact.number) {
      console.log('handleUpdateContact');
    } else {
      const updatedContact = {
        id,
        name,
        number,
      };
      dispatch(updateContact(updatedContact));
    }
  };

  const deleteContactTitle = 'Confirm deleting contact:';
  const deleteContactMsg = contact.name;

  return (
    <li className={css.contactCard}>
      <div className={css.contactInfo}>
        <div className={css.infoRow}>
          <FaUser />
          <span>{contact.name}</span>
        </div>
        <div className={css.infoRow}>
          <FaPhoneAlt />
          <span>{contact.number}</span>
        </div>
      </div>
      <div className="actions">
        <AlertDialog
          title={deleteContactTitle}
          message={deleteContactMsg}
          handleConfirm={handleDelete}
        />
        <EditContactDialog
          id={contact.id}
          name={contact.name}
          number={contact.number}
          saveChanges={handleUpdateContact}
        />
      </div>
    </li>
  );
};

export default Contact;
