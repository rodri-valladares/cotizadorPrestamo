import React from 'react'

export default function Resultado({total, plazo, cantidad}) {
  return (
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: $ {cantidad}</p>
        <p>A pagar en: {plazo} Meses</p>
        {/* <p>Su pago mensual es de: $ {total/plazo}</p> */}
        <p>Total a pagar $ {total}</p>
    </div>
  )
}
