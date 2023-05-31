import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {

  const [page, setPage] = useState({
    home: true,
    about: false,
    terms: false,
    contact: false,
  })

  return (
    <div className="App">
      <Header page={page} setPage={setPage}/>
      <MainContent page={page}/>
      <Footer />
    </div>
  );
}

export default App;
