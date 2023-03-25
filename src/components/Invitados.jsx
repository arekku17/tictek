import React from 'react'
import { invitados } from '../data/invitadosData'
import TitleSection from './TitleSection'

const Invitados = () => {
  return (
    <div className='containerInvitados' id='invitados'>

      <div className="bgInvitados"></div>

      <TitleSection title="DJ's" description="DJ's que van a poner ritmo al evento" />

      <div className="listInvitados">
        <div className="gridContainer">
          {
            invitados.djs.map(item =>
              <div className='invitadoContainer' id={item.nombre}>
                <img src={item.foto} alt={item.nombre} />
                <p className="nombreInvitado">{item.nombre}</p>
              </div>)
          }
        </div>
      </div>

      <div className="lineaDivisora"></div>
    </div>

  )
}

export default Invitados