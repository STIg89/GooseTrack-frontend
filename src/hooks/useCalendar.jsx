import { endOfMonth, Interval, startOfMonth } from 'date-fns';
import { useContext, createContext } from 'react';

export const CalendarContext = createContext({
  date: new Date(),
  view: 'month',
  viewPeriod: { start: startOfMonth(new Date()), end: endOfMonth(new Date()) },
  viewTimes: { start: 0, end: 24 * 60 * 60 * 1000 },
  customDays: 7,
  setView: () => {},
  setDate: () => {},
  goForward: () => {},
  goBackward: () => {},
});

/**
 * This hook can be used to connect to the calendar context and render content based on the context.
 * The context contains various information about the calendar state.
 *
 * @returns The calendar context
 */
export function useCalendar() {
  return useContext(CalendarContext);
}
