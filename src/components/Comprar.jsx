import React from 'react'
import { Link } from 'react-router-dom';

const Comprar = () => {

    const enviarMensaje = (tipo) => {
        let url = "https://api.whatsapp.com/send?text=¡Hola!, quisiera comprar un boleto "+ tipo +" por favor.&phone=529812044308"
        window.open(url);
    }

    return (
        <>
            <div className="context">
            </div>


            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
            <div className="pricing-wrapper clearfix">

                <div className="headerPrecios">
                <h1 className="pricing-table-title">Tabla de Precios</h1>
                <Link to="/">Ir a Tiktec.fun</Link>
                </div>
                

                <div className="tables">
                    <div className="pricing-table">
                        <h3 className="pricing-title">General</h3>
                        <div className="price">$150<sup>/ cada boleto</sup></div>
                        <ul className="table-list">
                            <li>Acceso <span>al evento</span></li>
                            <li>Pinturas <span>incluido</span></li>
                            <li>Espacio <span className="unlimited">sobre disponibilidad</span></li>
                        </ul>
                        <div className="table-buy">
                            <p>$150<sup>/ cada boleto</sup></p>
                            <button onClick={() => enviarMensaje("General")} className="pricing-action">Comprar</button>
                        </div>
                    </div>

                    <div className="pricing-table recommended">
                        <h3 className="pricing-title">VIP</h3>
                        <div className="price">$350<sup>/ cada boleto</sup></div>
                        <ul className="table-list">
                            <li>Acceso <span>al evento</span></li>
                            <li>Pinturas <span>incluido</span></li>
                            <li>Espacio y palapas <span className="unlimited">asegurado</span></li>
                            <li>Playera <span>del evento</span></li>
                            <li>Acceso a consumo <span className="unlimited">limitado</span></li>
                            <li>Tobogan <span className="unlimited">por una hora</span></li>
                            <li>Servicio <span>de meseros</span></li>
                        </ul>
                        <div className="table-buy">
                            <p>$350<sup>/ cada boleto</sup></p>
                            <button onClick={() => enviarMensaje("VIP")} className="pricing-action">Comprar</button>
                        </div>
                    </div>

                    <div className="pricing-table recommended">
                        <h3 className="pricing-title">PROMO</h3>
                        <div className="price">$500<sup>/ x 2 boletos</sup></div>
                        <ul className="table-list">
                            <li>Acceso <span>al evento</span></li>
                            <li>Pinturas <span>incluido</span></li>
                            <li>Espacio y palapas <span className="unlimited">asegurado</span></li>
                            <li>Acceso a consumo <span className="unlimited">limitado</span></li>
                            <li>Tobogan <span className="unlimited">por una hora</span></li>
                            <li>Servicio <span>de meseros</span></li>
                        </ul>
                        <div className="table-buy">
                            <p>$500<sup>/ x 2 boletos</sup></p>
                            <button onClick={() => enviarMensaje("PROMO 2x$500")} className="pricing-action">Comprar</button>
                        </div>
                    </div>
                </div>


            </div>
        </>


    )
}

export default Comprar