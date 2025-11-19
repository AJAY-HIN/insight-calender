import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalendarState {
  selectedDate: string | null;
  showPopup: boolean;
}

const initialState: CalendarState = {
  selectedDate: null,
  showPopup: false,
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
      state.showPopup = true;
    },
    closePopup: (state) => {
      state.showPopup = false;
    },
  },
});

export const { setSelectedDate, closePopup } = calendarSlice.actions;
export default calendarSlice.reducer;