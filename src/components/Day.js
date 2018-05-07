import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { isToday } from '../helpers';

const Day = (props) => {
  const className = cx({
    day: true,
    today: isToday(props.datetime),
    'not-active': props.month !== props.currentMonth,
    weekend: props.weekDay === 0 || props.weekDay === 6,
  });

  return (
    <button className={className}>
      <time dateTime={props.datetime}>{props.day}</time>
    </button>
  );
};

Day.propTypes = {
  datetime: PropTypes.instanceOf(Date).isRequired,
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  currentMonth: PropTypes.number.isRequired,
  weekDay: PropTypes.number.isRequired,
};

export default Day;
