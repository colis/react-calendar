import React from 'react';
import PropTypes from 'prop-types';

import MonthDropdown from './MonthDropdown';
import YearDropdown from './YearDropdown';

const Navigation = props => (
  <div className="navigation">
    <button onClick={() => props.goToPrevMonth()}>&lsaquo;</button>
    <MonthDropdown
      activeMonth={props.activeMonth}
      changeMonth={props.changeMonth}
    />
    <YearDropdown
      activeYear={props.activeYear}
      changeYear={props.changeYear}
    />
    <button onClick={() => props.goToNextMonth()}>&rsaquo;</button>
  </div>
);

Navigation.propTypes = {
  goToPrevMonth: PropTypes.func.isRequired,
  goToNextMonth: PropTypes.func.isRequired,
  changeMonth: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
  activeMonth: PropTypes.number.isRequired,
  activeYear: PropTypes.number.isRequired,
};

export default Navigation;
