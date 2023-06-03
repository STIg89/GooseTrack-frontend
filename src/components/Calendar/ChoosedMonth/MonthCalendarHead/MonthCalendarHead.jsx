import React from 'react';
import dateFns from 'date-fns';

const MonthCalendarHead = ({ currentDate }) => {
  const dateFormat = 'MMMM YYYY';
  return (
    <div className="header row flex-middle">
      <div className="column col-center">
        <span>{dateFns.format(currentDate, dateFormat)}</span>
      </div>
    </div>
  );
};

export default MonthCalendarHead;
