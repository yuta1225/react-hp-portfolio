import React from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function App() {
  return (
      <div className="App">
        <div id='wrapper' className='wrapper'>
          <head>
            {/* HP情報を書く */}
          </head>
          <body>
            <Header />
            <Main />
            <Footer />
          </body>
        </div>
      </div>
  );
}

export default App;