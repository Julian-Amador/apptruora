import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Process from './components/Process';
import ValueProposal from './components/ValueProposal';
import MyPast from './components/MyPast';
import MyPresent from './components/MyPresent';
import TheFuture from './components/TheFuture';
import ProposalTruora from './components/ProposalTruora';
import Footer from './components/Footer';
import Roadmap from './components/Roadmap';
import Metrics from './components/Metrics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900">
        <Header />
        <main className="pt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-indigo-700/30 to-indigo-900/30 backdrop-blur-sm -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-20">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/my-process" element={<Process />} />
              <Route path="/value" element={<ValueProposal />} />
              <Route path="/about/mypast" element={<MyPast />} />
              <Route path="/about/mypresent" element={<MyPresent />} />
              <Route path="/about/thefuture" element={<TheFuture />} />
              <Route path="/value/proposal-truora" element={<ProposalTruora />} />
              <Route path="/value/roadmap" element={<Roadmap />} />
              <Route path="/value/metrics" element={<Metrics />} />
              <Route path="*" element={<About />} /> 
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;