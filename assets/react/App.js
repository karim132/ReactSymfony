import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Competences from './pages/Competences'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';


function App() {

  
  return (
    <div>
      <header >
        <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/competences" element ={<Competences/>}/>
          <Route path="/portfolio" element ={<Portfolio/>}/>
          <Route path="/contact" element ={<Contact/>}/>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
