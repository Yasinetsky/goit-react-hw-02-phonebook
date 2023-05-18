import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  setFilterValue = event => {
    let value = event.currentTarget.value.toUpperCase();
    this.props.setFilterToState(value);
  };

  render() {
    return (
      <div>
        <h4>Найти контакты по имени</h4>
        <input
          type="text"
          value={this.props.filterValue}
          onChange={this.setFilterValue}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default Filter;
