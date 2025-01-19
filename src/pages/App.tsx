import React from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function App() {
  return (
      <div className="App">
        <div id='wrapper' className='wrapper'>
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
  );
}

export default App;