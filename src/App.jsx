import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState, useContext } from 'react';
import SideBar from './components/SideBar';
import { ClientsProvider } from "./contexts/ClientsContext";
import CasesTable from "./components/CasesTable";


function App() {


  return (
    
    <ClientsProvider>     
      <div className="App container-fluid">
        <div className="row">
          <SideBar/>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
              className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">REPORTES</h1>
            </div>
            <CasesTable/>
          </main>
        </div>
      </div>
    </ClientsProvider>
  );
}

export default App;
