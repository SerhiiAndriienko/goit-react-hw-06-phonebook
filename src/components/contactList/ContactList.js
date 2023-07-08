import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContactList } from 'redux/contactListSlice/contactListSlice';
import { getFilters } from 'redux/filterSlice/filterSlice';

function ContactList({ onDeleteContact }) {
  const filterContacts = useSelector(getFilters);
  const contactList = useSelector(getContactList);

  return (
    <ul>
      {(() => {
        if (contactList[0] === undefined) {
          return (
            <span
              style={{
                fontStyle: 'italic',
                textAlign: 'center',
                display: 'block',
              }}
            >
              Your phonebook is empty
            </span>
          );
        } else if (filterContacts === '') {
          return contactList.map(contact => (
            <li key={contact.id}>
              <span>
                {contact.name}: {contact.number}
              </span>
              <button
                onClick={() => {
                  onDeleteContact(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          ));
        } else {
          return contactList
            .filter(contact =>
              contact.name.toLowerCase().includes(filterContacts.toLowerCase())
            )
            .map(contact => (
              <li key={contact.id}>
                <span>
                  {contact.name}: {contact.number}
                </span>
                <button
                  onClick={() => {
                    onDeleteContact(contact.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ));
        }
      })()}
    </ul>
  );
}
ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
