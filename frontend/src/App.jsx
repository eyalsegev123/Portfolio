import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const App = () => (
  <div className="bg-navy min-h-screen">
    <Navbar />
    <main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  </div>
);

export default App;
