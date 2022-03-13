
import React,{Fragment, useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
//import logo from './logo.svg';

import './App.css';


function App() {
  //Defino state para pasar información a los componentes hijos
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState(0);
  return (
      <Fragment>
        <Header 
          titulo="cotizador de prestamo"
        />

        <div className="container">
          <Formulario
            cantidad={cantidad}
            guardarCantidad={guardarCantidad}
            plazo={plazo}
            guardarPlazo={guardarPlazo}
          />

        </div>

      </Fragment>  
  );
}

export default App;
