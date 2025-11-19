import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { dummyCalendarData } from '../data/dummyData';
import { setSelectedDate } from '../store/calendarSlice';
import type { RootState } from '../store/store';
import './Calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state: RootState) => state.calendar);

  const formatDateKey = (date: Date): string => {
    return moment(date).format('DD-MM-YYYY');
  };

  const hasDataForDate = (date: Date): boolean => {
    const dateKey = formatDateKey(date);
    return dateKey in dummyCalendarData;
  };

  const dayPropGetter = (date: Date) => {
    const dateKey = formatDateKey(date);
    const isSelected = selectedDate === dateKey;
    const hasData = hasDataForDate(date);

    if (isSelected) {
      return {
        className: 'selected-date',
        style: {
          backgroundColor: '#ff5722',
          color: 'white',
          border: '3px solid #d84315',
          fontWeight: 'bold'
        }
      };
    }
    
    if (hasData) {
      return {
        className: 'has-data',
        style: {
          backgroundColor: '#1976d2',
          color: 'white',
          border: '2px solid #0d47a1',
          fontWeight: 'bold'
        }
      };
    }
    return {};
  };

  const handleSelectSlot = (slotInfo: any) => {
    const selectedDate = slotInfo.start;
    const dateKey = formatDateKey(selectedDate);
    dispatch(setSelectedDate(dateKey));
  };

  return (
    <div className="calendar-container">
      <h2>Insight Calendar</h2>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 100px)' }}
        dayPropGetter={dayPropGetter}
        onSelectSlot={handleSelectSlot}
        selectable={true}
        views={['month']}
        defaultView="month"
        toolbar={false}
      />
    </div>
  );
};

export default CalendarComponent;