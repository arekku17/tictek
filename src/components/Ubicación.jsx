/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import TitleSection from './TitleSection'

const Ubicación = () => {
  return (
    <div className='ubicacionContainer' id='ubicación'>
        <div className="bgUbicacion"></div>
        <TitleSection title="Ubicación" description="¡Esta será la ubicación de nuestro colorido evento!" />
        <div className="imagenUbicacion">
            <img src="./img/aquapark.jpg" alt="aquapark" />
        </div>
        <p className="descripcion">
        En el parque acuático, te aseguramos una experiencia emocionante y llena de sorpresas. ¡No te lo pierdas!
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.168902017653!2d-90.72861937178013!3d19.339877751298634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f771d5840b7f19%3A0x51619e2540997dd9!2sAquaPark%20Mundo%20Pirata!5e0!3m2!1ses-419!2smx!4v1679755170835!5m2!1ses-419!2smx" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="lineaDivisora"></div>
    </div>
  )
}

export default Ubicación