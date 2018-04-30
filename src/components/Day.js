import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { isToday } from '../helpers';

class Day extends React.Component {

  static propTypes = {
    datetime: PropTypes.instanceOf(Date),
    day: PropTypes.number,
    month: PropTypes.number,
    currentMonth: PropTypes.number,
    weekDay: PropTypes.number
  };

  render() {
    let className = cx({
      'day': true,
      'today': isToday(this.props.datetime),
      'not-active': this.props.month != this.props.currentMonth,
      'weekend': this.props.weekDay == 0 || this.props.weekDay == 6
    });

    return (
      <button className={className}>
        <time dateTime={this.props.datetime}>{this.props.day}</time>
      </button>
    );
  }
}

export default Day;
