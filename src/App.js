import Header from './pages/navbar';
import './App.css';
import TradingViewWidget from './pages/shareprice';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Team from './pages/Team';
import Footer from './pages/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Home/>
      <TradingViewWidget/>
      <h3>The market's heartbeat visualized.</h3>
      <AboutUs/>
      <Team/>
      </main>
    <Footer/>
    </div>
  );
}

export default App;
