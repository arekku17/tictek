import React from 'react'
import TitleSection from './TitleSection'
import { patrocinadores } from '../data/patroData'

const Patrocinadores = () => {
  return (
    <div className='patroContainer' id='patrocinadores'>
      <div className="bgPatro"></div>
      <div className="titlePatrocinadores">
        <TitleSection title="Patrocinadores" description="Patrocinadores que apoyan el evento" />
      </div>
      <div className="patroList">
        {patrocinadores.patrocinadores.map(patro => (
          <a href={patro.link} target="_blank" rel="noreferrer"><img src={patro.foto} alt={patro.link} /></a>
        ))}
      </div>
      <TitleSection title="¿Quieres ser patrocinador de nuestro evento?" description="Ponte en contacto con nosotros y te mandamos más información" />
      <div className="lineaDivisora"></div>
    </div>
  )
}

export default Patrocinadores