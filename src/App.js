
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import Navbarr from "./components/navbar/Navbarr";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import About from "./pages/about/About";
import { Navbar } from "react-bootstrap";


function App() {

   
      //! burada navbar ve footer demirbaş olmalı, Home, About, Details sayfaları Route etiketleri ile Routes içinde belirlenmeli 
   
  return (
    <div>
      <Router>
       
       <Navbarr/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/:name" element={<Details />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/" element={<Navbar/>}/>
         
        </Routes>

       <Footer/>
      </Router>
     
    </div>
  );
}

export default App;

