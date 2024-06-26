
import './assets/css/App.css';

import NavBar from './components/Navbar';
import WeatherPanel from './components/WeatherPanel';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <WeatherPanel/>
    </div>
  );
}

export default App;
