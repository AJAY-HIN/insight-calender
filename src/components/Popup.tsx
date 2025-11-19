import { useSelector, useDispatch } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { RootState } from '../store/store';
import { closePopup } from '../store/calendarSlice';
import { dummyCalendarData } from '../data/dummyData';
import './Popup.css';

const Popup = () => {
  const dispatch = useDispatch();
  const { selectedDate, showPopup } = useSelector((state: RootState) => state.calendar);

  if (!showPopup) return null;

  const hasData = selectedDate && selectedDate in dummyCalendarData;
  const chartData = hasData && selectedDate ? 
    dummyCalendarData[selectedDate].map(item => {
      const [user, value] = Object.entries(item)[0];
      return { user, value };
    }) : [];

  return (
    <div className="popup-overlay" onClick={() => dispatch(closePopup())}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <h3>Data for {selectedDate}</h3>
          <button className="close-btn" onClick={() => dispatch(closePopup())}>
            ×
          </button>
        </div>
        <div className="popup-body">
          {hasData ? (
            <div>
              <p style={{ textAlign: 'center', marginBottom: '20px', color: '#666' }}>
                User data for {selectedDate}
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="user" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [value, 'Value']}
                    labelFormatter={(label) => `User: ${label}`}
                  />
                  <Bar dataKey="value" fill="#1976d2" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="no-data-alert">
              <h4>⚠️ No data found for the selected date.</h4>
              <p>Selected date: <strong>{selectedDate}</strong></p>
              <p style={{ fontSize: '0.8rem', marginTop: '15px' }}>
                Try clicking on highlighted dates (blue) to see data.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;