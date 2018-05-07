import React from 'react';
import PropTypes from 'prop-types';

import WeekdaysHeader from './WeekdaysHeader';
import Day from './Day';

import { getDays } from '../helpers';

class Calendar extends React.Component {
  static propTypes = {
    activeMonth: PropTypes.number.isRequired,
    activeYear: PropTypes.number.isRequired,
  };

  render() {
    const days = getDays(this.props.activeMonth, this.props.activeYear);

    return (
      <div className="calendar-view">
        <WeekdaysHeader />
        {days.map(day => (
          <Day
            key={day}
            datetime={day}
            day={day.getDate()}
            month={day.getMonth() + 1}
            currentMonth={this.props.activeMonth}
            weekDay={day.getDay()}
          />
        ))}
      </div>
    );
  }
}

export default Calendar;
