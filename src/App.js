import Navigation from './components/navigation'
import Home from './Pages/Home'
import './App.css';
import HomeSlider from './components/homeslider';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Home />
        <HomeSlider/>
    </div>
  );
}

export default App;
