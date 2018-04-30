import React from 'react';
import PropTypes from 'prop-types';

import { getMonths } from '../helpers';

class MonthDropdown extends React.Component {

  static propTypes = {
    activeMonth: PropTypes.number,
    changeMonth: PropTypes.func,
  };

  handleChange = (event) => {
    const selectedMonth = parseInt(event.currentTarget.value);
    this.props.changeMonth(selectedMonth);
  }

  render() {

    const activeMonth = this.props.activeMonth;
    const months = getMonths();

    return (
      <select name="months" value={activeMonth} onChange={this.handleChange}>
        {Object.keys(months).map(key =>
          <option key={key} className="month" value={key}>{months[key]}</option>)
        }
      </select>
    );
  }
}

export default MonthDropdown;
