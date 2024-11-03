import React from 'react';
import './App.scss';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BlogPage from './components/BlogPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div id='wrapper' className='wrapper'>
        <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/' element={<BlogPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
