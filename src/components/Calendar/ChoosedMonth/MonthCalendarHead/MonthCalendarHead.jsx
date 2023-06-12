import React, { useEffect, useState } from 'react';
import { format, startOfWeek, addDays } from 'date-fns';
import { Column, DaysRow } from './MonthCalendarHead.styled';
import { enGB, eo, uk } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

const locales = { enGB, eo, uk };
const MonthCalendarHead = ({ currentDate }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  useEffect(() => {
    if (i18n.language === 'ua') {
      setLanguage('uk');
    } else {
      setLanguage('enGB');
    }
  }, [i18n.language]);

  const getRows = language => {
    const dateFormatEn = window.innerWidth >= 768 ? 'EEE' : 'EEEEE';
    const dateFormatUk = window.innerWidth >= 768 ? 'EEEEEE' : 'EEEEE';
    const dateFormat = language === 'uk' ? dateFormatUk : dateFormatEn;
    const days = [];
    let startDate = startOfWeek(currentDate, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      const dayName =
        i === 5 || i === 6 ? (
          <Column key={i} style={{ color: '#3e85f3' }}>
            {format(addDays(startDate, i), dateFormat, {
              locale: locales[language],
            })}
          </Column>
        ) : (
          <Column key={i}>
            {format(addDays(startDate, i), dateFormat, {
              locale: locales[language],
            })}
          </Column>
        );
      days.push(dayName);
    }
    return days;
  };
  return <DaysRow>{getRows(language)}</DaysRow>;
};

export default MonthCalendarHead;
