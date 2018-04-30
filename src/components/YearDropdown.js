import React from 'react';
import PropTypes from 'prop-types';

class YearDropdown extends React.Component {

  static propTypes = {
    activeYear: PropTypes.number,
    changeYear: PropTypes.func,
  };

  handleChange = (event) => {
    const selectedYear = parseInt(event.currentTarget.value);
    this.props.changeYear(selectedYear);
  }

  render() {

    const activeYear = this.props.activeYear;
    const years = Array.from({length: 50}, (v, k) => k + 1980);

    return (
      <select name="years" value={activeYear} onChange={this.handleChange}>
        {years.map(year =>
          <option key={year} className="year" value={year}>{year}</option>)
        }
      </select>
    );
  }
}

export default YearDropdown;
