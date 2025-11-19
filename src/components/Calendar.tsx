import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { dummyCalendarData } from '../data/dummyData';
import './Calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const formatDateKey = (date: Date): string => {
    return moment(date).format('DD-MM-YYYY');
  };

  const hasDataForDate = (date: Date): boolean => {
    const dateKey = formatDateKey(date);
    return dateKey in dummyCalendarData;
  };

  const dayPropGetter = (date: Date) => {
    if (hasDataForDate(date)) {
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
    
    if (hasDataForDate(selectedDate)) {
      console.log('Data for', dateKey, ':', dummyCalendarData[dateKey]);
    } else {
      console.log('No data found for', dateKey);
    }
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