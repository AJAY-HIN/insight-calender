export interface UserData {
  [key: string]: number;
}

export interface CalendarData {
  [date: string]: UserData[];
}

export const dummyCalendarData: CalendarData = {
  "01-11-2025": [
    {"user_1": 1},
    {"user_2": 2},
    {"user_3": 3},
    {"user_4": 4},
  ],
  "02-11-2025": [
    {"user_1": 5},
    {"user_2": 3},
    {"user_3": 7},
    {"user_4": 2},
  ],
  "03-11-2025": [
    {"user_1": 2},
    {"user_2": 6},
    {"user_3": 1},
    {"user_4": 8},
  ],
  "04-11-2025": [
    {"user_1": 4},
    {"user_2": 1},
    {"user_3": 5},
    {"user_4": 3},
  ],
  "15-11-2025": [
    {"user_1": 3},
    {"user_2": 7},
    {"user_3": 2},
    {"user_4": 6},
  ],
  "20-11-2025": [
    {"user_1": 6},
    {"user_2": 4},
    {"user_3": 8},
    {"user_4": 1},
  ],
  "25-11-2025": [
    {"user_1": 2},
    {"user_2": 5},
    {"user_3": 3},
    {"user_4": 7},
  ]
};