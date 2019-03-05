import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MiPrimerComponente from './components/miPrimerComponente'

class App extends Component {
  render() {

    // const empleado = {
    //   nombre: "Osvaldo",
    //   trabajo: "Dev.f"
    // }

    return (
      // <div className="contenedor1">
      //   <h1>Datos del empleado</h1>
      //   <p>Nombre: {empleado.nombre}</p>
      //   <p>Trabajo: {empleado.trabajo}</p>
      // </div>
      <MiPrimerComponente/>
    );
  }
}

export default App;
