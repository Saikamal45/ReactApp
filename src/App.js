import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { ContactUs } from './components/ContactUs';

function App() {
  return (
    <div>
      <Router>
     <Navbar/>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
