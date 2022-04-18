import './App.css';
import AppFeatures from './columns/AppFeatures/AppFeatures';
import ContactUs from './columns/ContactUs/ContactUs';
import GetApp from './columns/GetApp/GetApp';
import Header from './columns/Header/Header';
import HowItWorks from './columns/HowItWorks/HowItWorks';
import RecentAwards from './columns/RecentAwards/RecentAwards';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import {useState} from 'react'
import MobleDrawer from './components/MobleDrawer/MobleDrawer';

function App() {
  const [darkMode, setdarkMode] = useState(false)
  const [drawerOpen, setdrawerOpen] = useState(false)

  const toogleDarkMode = () => {
    setdarkMode(!darkMode)
  }

  const toogleDrawer = () => {
    setdrawerOpen(!drawerOpen)
  }

  return (
    <div className={`App ${darkMode&&'dark'}`}>
      <NavBar 
        onClick={toogleDarkMode}
        toogleDrawer={toogleDrawer}
        isDark={darkMode}/>
        <MobleDrawer 
          drawerOpen={drawerOpen}
          toogleDrawer={toogleDrawer}
          toogleDarkMode={toogleDarkMode}
          isDark={darkMode}
          />
      <Header />
      <RecentAwards />
      <AppFeatures />
      <HowItWorks />
      <GetApp />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
