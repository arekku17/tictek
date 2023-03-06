import React from 'react'
import { Link } from 'react-scroll'

export const Sidebar = (props) => {
    return (
        <div className={props.open ? "menuSide activeSide" : "menuSide"}>
            <ul className="sidebar">
                <li>
                    <Link activeClass="selected" to="inicio" spy={true} smooth={true} offset={-300}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link activeClass="selected" to="invitados" spy={true} smooth={true} offset={-300}>
                        Invitados
                    </Link>
                </li>
                <li>
                    <Link activeClass="selected" to="acercade" spy={true} smooth={true} offset={-300}>
                        Acerca de
                    </Link>
                </li>
                <li>
                    <Link activeClass="selected" to="detalles" spy={true} smooth={true} offset={-300}>
                        Detalles
                    </Link>
                </li>
                <li>
                    <Link activeClass="selected" to="patrocinadores" spy={true} smooth={true} offset={-300}>
                        Patrocinadores
                    </Link>
                </li>
            </ul>
            <button className='buy'>
                <p>COMPRAR BOLETOS</p>
            </button>
        </div>
    )
}
