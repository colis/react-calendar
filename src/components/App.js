import React from 'react';
import PropTypes from 'prop-types';

import {
  getCurrentDate,
  getNextMonth,
  getPrevMonth,
} from '../helpers';

import Navigation from './Navigation';
import Calendar from './Calendar';

class App extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        month: PropTypes.string,
        year: PropTypes.string,
      }).isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    const { params } = this.props.match;
    const { month, year } = getCurrentDate();

    this.state = {
      month: parseInt(params.month, 10) || month,
      year: parseInt(params.year, 10) || year,
    };
  }

  goToYearMonth = ({ month, year }) => {
    this.setState({ month, year });
    this.props.history.push(`/${month}/${year}`);
  }

  goToPrevMonth = () => {
    const { month, year } = this.state;
    this.goToYearMonth(getPrevMonth(month, year));
  }

  goToNextMonth = () => {
    const { month, year } = this.state;
    this.goToYearMonth(getNextMonth(month, year));
  }

  changeMonth = (selectedMonth) => {
    const { year } = this.state;
    this.goToYearMonth({ month: selectedMonth, year });
  }

  changeYear = (selectedYear) => {
    const { month } = this.state;
    this.goToYearMonth({ month, year: selectedYear });
  }

  render() {
    return (
      <div className="calendar">
        <Navigation
          activeMonth={this.state.month}
          activeYear={this.state.year}
          goToPrevMonth={this.goToPrevMonth}
          goToNextMonth={this.goToNextMonth}
          changeMonth={this.changeMonth}
          changeYear={this.changeYear}
        />
        <Calendar
          activeMonth={this.state.month}
          activeYear={this.state.year}
        />
      </div>
    );
  }
}

export default App;
