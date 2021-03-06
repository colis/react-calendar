export const getCurrentDate = () => {
  const date = new Date();

  return {
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
};

export const getNextMonth = (month, year) => ({
  month: month === 12 ? 1 : month + 1,
  year: month === 12 ? year + 1 : year,
});

export const getPrevMonth = (month, year) => ({
  month: month === 1 ? 12 : month - 1,
  year: month === 1 ? year - 1 : year,
});

export const getMonths = () => ({
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
});

export const getPrevMonthDays = (prevMonth, maybePrevYear, length) => {
  const prevMonthDays = [];
  for (let i = 0; i < length; i += 1) {
    prevMonthDays.push(new Date(maybePrevYear, prevMonth, i - (length - 1)));
  }
  return prevMonthDays;
};

export const getActiveMonthDays = (activeMonth, activeYear) => {
  const endDay = new Date(activeYear, activeMonth, 0).getDate();

  const activeMonthDays = [];
  for (let i = 1; i <= endDay; i += 1) {
    activeMonthDays.push(new Date(activeYear, activeMonth - 1, i));
  }
  return activeMonthDays;
};

export const getNextMonthDays = (nextMonth, maybeNextYear, length) => {
  const nextMonthDays = [];
  for (let i = 0; i < length; i += 1) {
    nextMonthDays.push(new Date(maybeNextYear, nextMonth - 1, i + 1));
  }
  return nextMonthDays;
};

export const getDays = (activeMonth, activeYear) => {
  const calendarSize = 42;
  const firstDay = new Date(activeYear, activeMonth - 1);
  const firstWeekDay = firstDay.getDay();

  const firstDayIndex = (firstWeekDay + 6) % 7;

  const { month: prevMonth, year: maybePrevYear } = getPrevMonth(activeMonth, activeYear);
  const { month: nextMonth, year: maybeNextYear } = getNextMonth(activeMonth, activeYear);

  const prevMonthDays = getPrevMonthDays(prevMonth, maybePrevYear, firstDayIndex);
  const activeMonthDays = getActiveMonthDays(activeMonth, activeYear);
  const nextMonthDays = getNextMonthDays(
    nextMonth,
    maybeNextYear,
    calendarSize - prevMonthDays.length - activeMonthDays.length,
  );

  return [
    ...prevMonthDays,
    ...activeMonthDays,
    ...nextMonthDays,
  ];
};

export const isToday = (dateTime) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.getTime() === dateTime.getTime();
};
