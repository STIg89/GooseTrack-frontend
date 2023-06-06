const { useParams } = require('react-router');

export const useDateValidation = () => {
  const params = useParams();
  const date = new Date(params.currentDay);

  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (isNaN(date)) {
      return new Date();
    } else {
      return date;
    }
  }
};
