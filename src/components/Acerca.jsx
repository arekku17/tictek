import React from 'react'
import TitleSection from './TitleSection'

const Acerca = () => {
  return (
    <div className='acercaContainer' id='acercade'>
      <div className="bgAcerca"></div>

      <TitleSection title="Acerca de" description="¡Una descripción acerca de este grandioso evento!" />

      <div className="infoEvento">
        <img src="/img/color-fest.jpg" alt="colorfest"/>
        <p>
          <span>TIKTEC 2023 Color Fest</span> es un evento lleno de libertad y diversión en el que podrás pasar un momento divertido y vivir una experiencia inolvidable. 
        </p>
      </div>

      <div className="infoEvento" style={{flexDirection: "row-reverse"}}>
        <img src="/img/color-dj.jpg" alt="colorfest"/>
        <p>
        Durante el festival, podrás disfrutar de la música de nuestros DJs en vivo mientras te sumerges en una lluvia de colores vibrantes y brillantes.  
        </p>
      </div>
    </div>
  )
}

export default Acerca