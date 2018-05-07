import React from 'react';
import PropTypes from 'prop-types';

import MonthDropdown from './MonthDropdown';
import YearDropdown from './YearDropdown';

class Navigation extends React.Component {
  static propTypes = {
    goToPrevMonth: PropTypes.func.isRequired,
    goToNextMonth: PropTypes.func.isRequired,
    changeMonth: PropTypes.func.isRequired,
    changeYear: PropTypes.func.isRequired,
    activeMonth: PropTypes.number.isRequired,
    activeYear: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div className="navigation">
        <button onClick={() => this.props.goToPrevMonth()}>&lsaquo;</button>
        <MonthDropdown
          activeMonth={this.props.activeMonth}
          changeMonth={this.props.changeMonth}
        />
        <YearDropdown
          activeYear={this.props.activeYear}
          changeYear={this.props.changeYear}
        />
        <button onClick={() => this.props.goToNextMonth()}>&rsaquo;</button>
      </div>
    );
  }
}

export default Navigation;
