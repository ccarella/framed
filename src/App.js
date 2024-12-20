import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Essays from './pages/Essays';
import Essay from './pages/Essay';
import Artwork from './pages/Artwork';
import ArtworkDetail from './pages/ArtworkDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/essays" element={<Essays />} />
        <Route path="/essays/:id" element={<Essay />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
      </Routes>
      <footer>
        <p>"Copyright" © 2024 Chris Carella</p>
      </footer>
    </div>
  );
}

export default App;
