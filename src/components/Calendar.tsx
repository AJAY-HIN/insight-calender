import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { dummyCalendarData } from '../data/dummyData';
import { setSelectedDate } from '../store/calendarSlice';
import { RootState } from '../store/store';
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
          backgroundColor: '#ffeb3b',
          border: '2px solid #ff9800'
        }
      };
    }
    
    if (hasData) {
      return {
        className: 'has-data',
        style: {
          backgroundColor: '#e3f2fd',
          border: '2px solid #2196f3'
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
        style={{ height: 600 }}
        dayPropGetter={dayPropGetter}
        onSelectSlot={handleSelectSlot}
        selectable={true}
        views={['month', 'week', 'day']}
        defaultView="month"
      />
    </div>
  );
};

export default CalendarComponent;