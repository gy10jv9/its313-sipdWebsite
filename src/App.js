import SplashScreen from './components/splashScreen';
import Banner from './components/Banner'
import Events from './components/Events';
import Navigation from './components/Navigation';
import Members from './components/Members';
import Footer from './components/Footer'
import Interestclubs from './components/Interestclubs';
import './css/style.css';
import './css/fonts.css';

function App() {
  return (
    <div>
      <Navigation/>
      <Banner/>
      <Interestclubs/>
      <Members/>
      <Events/>
      <Footer/>
    </div>
  )
}

export default App;
