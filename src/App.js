import Navigation from './components/navigation'
import Home from './Pages/Home'
import './App.css';
import HomeSlider from './components/homeslider';
import Sites from './components/sitecont'

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Home />
        <HomeSlider/>
        <Sites/>
    </div>
  );
}

export default App;
