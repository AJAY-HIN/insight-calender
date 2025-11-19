import { Provider } from 'react-redux';
import { store } from './store/store';
import CalendarComponent from './components/Calendar';
import Popup from './components/Popup';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CalendarComponent />
        <Popup />
      </div>
    </Provider>
  )
}

export default App
