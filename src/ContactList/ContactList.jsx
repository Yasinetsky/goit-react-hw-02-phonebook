import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ContactList extends Component {
  deleteId = (id) => {
    this.props.del(id);
  };

  createList = () => {
    return this.props.contacts.map((contact) => {
      return (
        <li key={contact.id} id={contact.id}>
          {`${contact.name}: ${contact.number}`}
          <button
            data-id={contact.id}
            onClick={() => this.deleteId(contact.id)}
          >
            Delete
          </button>
        </li>
      );
    });
  };

  render() {
    return <ul>{this.createList()}</ul>;
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  del: PropTypes.func.isRequired,
};

ContactList.defaultProps = {
  contacts: [],
};

export default ContactList;
