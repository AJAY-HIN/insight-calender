import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { closePopup } from '../store/calendarSlice';
import './Popup.css';

const Popup = () => {
  const dispatch = useDispatch();
  const { selectedDate, showPopup } = useSelector((state: RootState) => state.calendar);

  if (!showPopup) return null;

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
          <p>Chart will be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;