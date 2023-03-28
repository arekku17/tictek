import React from 'react'
import TitleSection from './TitleSection'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contacto = () => {
    return (
        <div className='contactoContainer' id='contacto'>
            <div className="bgPatro"></div>
            <TitleSection title="Contacto" description="Nuestros medios de contacto" />
            <div className="listContacto">
                <div className="itemContacto">
                    <div className="whatsapp">
                        <WhatsAppIcon sx={{ fontSize: 60, color: "white" }} />
                        <p>+52 981 204 4308</p>
                    </div>
                    <div className="whatsapp">
                        <WhatsAppIcon sx={{ fontSize: 60, color: "white" }} />
                        <p>+52 982 131 37 85</p>
                    </div>
                    <div className="whatsapp">
                        <WhatsAppIcon sx={{ fontSize: 60, color: "white" }} />
                        <p>+52 982 132 99 81</p>
                    </div>
                </div>
                <a href='https://www.facebook.com/tikteccolorfest' target="_blank" rel="noreferrer">
                    <div className="itemContacto">
                        <FacebookIcon sx={{ fontSize: 60, color: "white" }} />
                        <p>TIK TEC 2023</p>
                    </div>
                </a>
            </div>
            <div className="enviarMensaje" onClick={() => window.open("https://api.whatsapp.com/send?text=¡Hola! quiero hablar sobre el evento TikTec 2023&phone=529812044308")}>
                Enviar Mensaje
            </div>

        </div>
    )
}

export default Contacto