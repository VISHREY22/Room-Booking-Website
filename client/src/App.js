import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registrationscreen from './screens/Resistrationscreen.js';
import Loginscreen from './screens/Loginscreen.js';
import Profilescreen from './screens/Profilescreen'; 
import Adminscreen from './screens/Adminscreen.js';
import Landingscreen from './screens/Landingscreen.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homescreen />} />
          <Route path="/book/:roomid/:fromdate/:todate" element={<Bookingscreen />} />
          <Route path='/register' exact element={<Registrationscreen />} />
          <Route path='/login' exact element={<Loginscreen />} />
          <Route path='/profile' exact element={<Profilescreen />} />
          <Route path='/admin' exact element={<Adminscreen/>}/>
          <Route path="/" element={<Landingscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
