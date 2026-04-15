import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import OWork from './pages/OWork';
import OTalk from './pages/OTalk';
import OPulse from './pages/OPulse';
import PeopleAndPlaces from './pages/PeopleAndPlaces';
import Templates from './pages/Templates';
import Reports from './pages/Reports';
import Docs from './pages/Docs';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-wrapper">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/owork" element={<OWork />} />
            <Route path="/otalk" element={<OTalk />} />
            <Route path="/opulse" element={<OPulse />} />
            <Route path="/people-places" element={<PeopleAndPlaces />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/docs/onahiri" element={<Docs />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
