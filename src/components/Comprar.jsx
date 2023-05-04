import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ModalComprar from './ModalComprar';

const Comprar = () => {


    const [modalIsOpen, setIsOpen] = useState(false);
    const [tipoBoleto, setTipoBoleto] = useState("");

    const abrirModal = (tipo) => {
        setTipoBoleto(tipo);
        setIsOpen(true);
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
                            <button onClick={() => abrirModal("General")} className="pricing-action">Comprar</button>
                        </div>
                    </div>

                    <div className="pricing-table recommended">
                        <h3 className="pricing-title">VIP</h3>
                        <div className="price">$280<sup>/ cada boleto</sup></div>
                        <ul className="table-list">
                            <li>Acceso <span>al evento</span></li>
                            <li>Pinturas <span>incluido</span></li>
                            <li>Espacio y palapas <span className="unlimited">asegurado</span></li>
                            <li>Acceso a consumo <span className="unlimited">limitado</span></li>
                            <li>Tobogan <span className="unlimited">por una hora</span></li>
                            <li>Servicio <span>de meseros</span></li>
                        </ul>
                        <div className="table-buy">
                            <p>$280<sup>/ cada boleto</sup></p>
                            <button onClick={() => abrirModal("VIP")} className="pricing-action">Comprar</button>
                        </div>
                    </div>

                    <div className="pricing-table">
                        <h3 className="pricing-title">General PROMO</h3>
                        <div className="price">$200<sup>/ x 2 boletos</sup></div>
                        <ul className="table-list">
                            <li>Acceso <span>al evento</span></li>
                            <li>Pinturas <span>incluido</span></li>
                            <li>Espacio <span className="unlimited">sobre disponibilidad</span></li>
                        </ul>
                        <div className="table-buy">
                            <p>$200<sup>/ x 2 boletos</sup></p>
                            <button onClick={() => abrirModal("$200 x 2")} className="pricing-action">Comprar</button>
                        </div>
                    </div>

                    <div className="pricing-table recommended">
                        <h3 className="pricing-title">VIP PROMO</h3>
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
                            <button onClick={() => abrirModal("$500 x 2")} className="pricing-action">Comprar</button>
                        </div>
                    </div>
                </div>


            </div>

            <ModalComprar modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} tipo={tipoBoleto} ></ModalComprar>

            <div className="desarrollado">
                <p>Diseñado y desarrollado por:</p>
                <a href="https://arekku-portfolio.netlify.app/"><img src="/img/logo arekku white.png" alt="logo arekku" /></a>  
            </div>
        </>


    )
}

export default Comprar