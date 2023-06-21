// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <NavBar/>
    <Hero/>
    <SectionOne/>
    <Newsletter/>
    <Cards />
    <Footer />
    </div>
  );
}

export default App;
