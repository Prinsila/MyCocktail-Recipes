import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About/About';
import Cocktails from './Pages/Cocktails';
import CocktailDetail from './Pages/Cocktaildetail'; 
import SearchForm from './Components/CocktailSearch/SearchForm';
import Navbar from './Components/Navbar/Navbar';
import './Styles/Index.css';
import ContactPage from './Pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/cocktails/:id" element={<CocktailDetail />} />
          <Route path="/SearchForm" element={<SearchForm />} />
          <Route path="/contactPage" element={<ContactPage />} /> 
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
}

export default App;
