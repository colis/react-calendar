import React from 'react';

class WeekdaysHeader extends React.Component {

  render() {

    const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    return (
      <div className="weekdays">
        {weekdays.map(weekday =>
          <span key={weekday} className="weekday">{weekday.toUpperCase()}</span>)
        }
      </div>
    );
  }
}

export default WeekdaysHeader;
