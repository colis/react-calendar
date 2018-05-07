import React from 'react';
import PropTypes from 'prop-types';

import WeekdaysHeader from './WeekdaysHeader';
import Day from './Day';

import { getDays } from '../helpers';

const Calendar = (props) => {
  const days = getDays(props.activeMonth, props.activeYear);

  return (
    <div className="calendar-view">
      <WeekdaysHeader />
      {days.map(day => (
        <Day
          key={day}
          datetime={day}
          day={day.getDate()}
          month={day.getMonth() + 1}
          currentMonth={props.activeMonth}
          weekDay={day.getDay()}
        />
      ))}
    </div>
  );
};

Calendar.propTypes = {
  activeMonth: PropTypes.number.isRequired,
  activeYear: PropTypes.number.isRequired,
};

export default Calendar;
