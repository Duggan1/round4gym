import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import HomePage from './HomePage'
import Team4 from './Team4';
import PT from './PT';
import Schedule from './Schedule';
import Prices from './Prices';
import Footer from './Footer';
function App() {
  return (<>
    <BrowserRouter>
    {/* <Header />  */}
    <Routes>

    <Route path="/" element={<HomePage/>} />
    <Route path="/coaches" element={<Team4/>} />
    <Route path="/personalTraining" element={<PT/>} />
    <Route path="/schedule" element={<Schedule/>} />
    <Route path="/options" element={<Prices/>} />


    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      
    </div> */}
    </Routes>
    <Footer/>
    
  </BrowserRouter>
  </>
  );
}

export default App;
