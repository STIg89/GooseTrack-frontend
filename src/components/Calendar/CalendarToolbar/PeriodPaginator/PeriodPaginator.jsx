import React, { useState } from 'react';
import sprite from 'images/sprite.svg';
import periodPaginatorStyled from './PeriodPaginator.styled';

const PeriodPaginator = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const { PeriodView, PeriodTabs, PeriodTabsContainer } = periodPaginatorStyled;

  return (
    <>
      <PeriodView>{month}</PeriodView>
      <PeriodTabsContainer>
        <PeriodTabs>
          <svg width="16" height="16">
            <use href={`${sprite}#calendar-right-sf`}></use>
          </svg>
        </PeriodTabs>
        <PeriodTabs style={{ transform: 'rotate(180deg)' }}>
          <svg width="16" height="16">
            <use href={`${sprite}#calendar-right-sf`}></use>
          </svg>
        </PeriodTabs>
      </PeriodTabsContainer>
    </>
  );
};
export default PeriodPaginator;
