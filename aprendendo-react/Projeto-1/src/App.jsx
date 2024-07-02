import React from 'react';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import './components/App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
        <h1>Bem-vindo ao Meu Blog</h1>
      </header>
      <main>
        <Blog />
      </main>
        <Footer />
    </div>
  );
};

export default App;
