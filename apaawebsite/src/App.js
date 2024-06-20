import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar.js';
import Home from './Pages/Home.js';
import History from './Pages/History.js'
import Leadership from './Pages/Leadership.js'
import Events from './Pages/Events.js'
import Support from './Pages/Support.js'
import Footer from './Components/Footer.js'
import './CSS/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
        <Route path="/history" element={<History />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/events" element={<Events />} />
        <Route path="/support" element={<Support />} />
        <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
