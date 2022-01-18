import propTypes from 'prop-types';
import {
  ContactsList,
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactList.styled';

const ContactList = ({ contactNames, deleteContact }) => {
  return (
    <ContactsList>
      {contactNames().map(contact => (
        <ContactItem key={contact.id}>
          <ContactName>{contact.name}:</ContactName>
          <ContactNumber>{contact.number}</ContactNumber>
          <Button type="button" id={contact.id} onClick={deleteContact}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </ContactsList>
  );
};
export default ContactList;

ContactList.propTypes = {
  contactNames: propTypes.func.isRequired,
  deleteContact: propTypes.func.isRequired,
};
