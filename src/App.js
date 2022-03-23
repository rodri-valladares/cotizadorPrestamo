
import React,{Fragment, useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Resultado from './componentes/Resultado';
//import logo from './logo.svg';

import './App.css';


function App() {
  //Defino state para pasar información a los componentes hijos
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
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
            total={total}
            guardarTotal={guardarTotal}
          />

          {/* <p>Total a pagar: $ {total} </p> */}
          <div className="mensajes">

            <Resultado
              total={total}
              plazo={plazo}
              cantidad={cantidad}
            />
          </div>

        </div>

      </Fragment>  
  );
}

export default App;
