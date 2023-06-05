import React from 'react';
import sprite from 'images/sprite.svg';
import { addMonths, subMonths } from 'date-fns';
import {
  PeriodView,
  PeriodTabs,
  PeriodTabsContainer,
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ setCurrentDate, currentDate }) => {
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  // const monthFormat = 'MMMM';
  // console.log(currentDate);
  // const formattedMonth = format(currentDate, monthFormat);
  return (
    <>
      <PeriodView>{currentDate}</PeriodView>
      <PeriodTabsContainer>
        <PeriodTabs onClick={prevMonth}>
          <svg width="16" height="16">
            <use href={`${sprite}#calendar-right-sf`}></use>
          </svg>
        </PeriodTabs>
        <PeriodTabs style={{ transform: 'rotate(180deg)' }} onClick={nextMonth}>
          <svg width="16" height="16">
            <use href={`${sprite}#calendar-right-sf`}></use>
          </svg>
        </PeriodTabs>
      </PeriodTabsContainer>
    </>
  );
};
export default PeriodPaginator;
