import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import SideBar from './components/SideBar';


function App() {
  return (
      <div className="App container-fluid">
        <div className="row">
          <SideBar/>


        </div>
      </div>
  );
}

export default App;
