import { Outlet } from 'react-router';

import CalendarToolbar from 'components/Calendar/CalendarToolbar/CalendarToolbar';
import ChoosedMonth from 'components/Calendar/ChoosedMonth/ChoosedMonth';

const CalendarPage = () => {
  return (
    <div>
      <CalendarToolbar />
      <ChoosedMonth />

      <Outlet />
    </div>
  );
};

export default CalendarPage;
