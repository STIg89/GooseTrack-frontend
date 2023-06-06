export const parseDate = date => {
  const parsedYear = date.getFullYear().toString();
  const parsedMonth =
    date.getMonth() < 9 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const parsedDay =
    date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  const parsedDate = `${parsedYear}-${parsedMonth}-${parsedDay}`;
  return parsedDate;
};
