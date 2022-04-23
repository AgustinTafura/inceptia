**Ejercicio 2:**

*2.1) ¿Cómo implementarías las acciones del frontend utilizando redux? (por*

*ejemplo autenticación, solicitud de clientes activos para el usuario y*

*solicitud de casos por cliente)*


*2.2) Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías el index.js?*

Una alternativa es utilizar la libreria **'react-router-dom'** para esteblecer rutas en la aplicación. 

Podría aplicarse de la siguiente manera en el index.js:


import "babel-polyfill";
import "react-app-polyfill/ie11";

import React from 'react'
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from './App';
import {BrowserRouter , Switch, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route exact path="/bots" component={App}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
document.getElementById("root")
);

serviceWorker.unregister();
