import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Events from './Pages/Events';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<Aboutus/>} />
           <Route path='/events' element={<Events />} />
           <Route path='/team' element={<Team />} />
           <Route path='/contact' element={<Contact/>}/>
        </Routes>
       
        <Footer />
      </Router>
      
    </div>
  )
}

export default App
