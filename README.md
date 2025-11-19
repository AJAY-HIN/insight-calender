# Insight Calendar - React Big Calendar with Bar Graph

A React application featuring an interactive calendar with data visualization using bar graphs. Built with React, TypeScript, Redux, and Recharts.

## Features

- **Interactive Calendar**: Month, week, and day views using React Big Calendar
- **Data Visualization**: Bar graphs showing user data for selected dates
- **Date Highlighting**: Visual indicators for dates containing data
- **Selected Date Highlighting**: Clear indication of currently selected date
- **Popup Modal**: Shows bar graph or "no data" alert for clicked dates
- **Redux State Management**: Centralized state for calendar interactions
- **Responsive Design**: Full-screen calendar layout

## Technologies Used

- React 19.2.0
- TypeScript
- Vite
- Redux Toolkit
- React Big Calendar
- Recharts
- Moment.js

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps to Run

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd insight-calender
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The calendar will load in full-screen mode

## Usage

### Calendar Navigation
- Use the toolbar to switch between Month, Week, and Day views
- Navigate between months using the navigation arrows
- Click on any date to select it

### Data Interaction
- **Dates with data** are highlighted in dark blue with white text
- **Selected dates** are highlighted in orange-red
- **Today's date** has a light green background

### Popup Functionality
- Click any date to open a popup modal
- **Dates with data**: Shows a bar graph with user statistics
- **Dates without data**: Shows a warning message with the selected date

## Sample Data

The application includes dummy data for the following dates in November 2025:
- 01-11-2025, 02-11-2025, 03-11-2025, 04-11-2025
- 15-11-2025, 20-11-2025, 25-11-2025

Each date contains user data in the format:
```json
{
  "01-11-2025": [
    {"user_1": 1},
    {"user_2": 2},
    {"user_3": 3},
    {"user_4": 4}
  ]
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Calendar.tsx       # Main calendar component
│   ├── Calendar.css       # Calendar styling
│   ├── Popup.tsx         # Modal popup component
│   └── Popup.css         # Popup styling
├── data/
│   └── dummyData.ts      # Sample calendar data
├── store/
│   ├── store.ts          # Redux store configuration
│   └── calendarSlice.ts  # Calendar state management
├── App.tsx               # Main app component
└── main.tsx             # Application entry point
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development Notes

- The application uses Redux for state management
- Calendar highlighting is handled through dayPropGetter
- Bar graphs are rendered using Recharts library
- Full responsive design with viewport-based sizing