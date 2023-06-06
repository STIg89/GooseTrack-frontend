import { Outlet } from 'react-router';
import ChoosedDay from 'components/Calendar/ChoosedDay/ChoosedDay';

const CalendarPage = () => {
  return (
    <div>
      <div>
        <ChoosedDay />
      </div>

      <Outlet />
    </div>
  );
};

export default CalendarPage;
