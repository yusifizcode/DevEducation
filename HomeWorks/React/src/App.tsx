import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './pages/Header/Header';
import { Footer } from './pages/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Header />
    <main> 
      <HomePage />
    </main>
    <Footer />
    </div>
  );
}

export default App;
