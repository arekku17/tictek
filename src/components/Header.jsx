import { Button, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { theme } from '../Theme/Theme';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Sidebar } from './Sidebar';
import { Link } from 'react-router-dom';

const Header = () => {

    const [fix, setFix] = useState(false);
    const [side, setSide] = useState(false);

    const setFixed = () => {

        if (window.scrollY >= 530) {
            setFix(true);
        } else {
            setFix(false);
        }
    }

    const changeSide = () => {
        console.log(side);
        setSide(!side);
    }

    window.addEventListener('scroll', setFixed)

    return (
        <header className={fix ? "header-active" : ""}>
            <h1 className="pageTitle">TikTec 2023</h1>
            <nav>
                <ul className="navbarHorizontal">
                    <li>
                        <LinkScroll activeClass="selected" to="inicio" spy={true}  smooth={true}  offset={-300}>
                            Inicio
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll activeClass="selected" to="acercade" spy={true} smooth={true}>
                            Acerca de
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll activeClass="selected" to="invitados" spy={true} smooth={true}>
                            DJ's
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll activeClass="selected" to="ubicación" spy={true} smooth={true}>
                            Ubicación
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll activeClass="selected" to="patrocinadores" spy={true} smooth={true}>
                            Patrocinadores
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll activeClass="selected" to="contacto" spy={true} smooth={true}>
                            Contacto
                        </LinkScroll>
                    </li>

                </ul>
            </nav>
            <ThemeProvider theme={theme}>
                <Link to="/boletos">
                <Button variant="outlined" color="primary" startIcon={<ShoppingBagIcon fontSize="inherit" />}
                    className="buttonBuy" size='large' >Comprar Boletos</Button>
                </Link>
            </ThemeProvider>
            <button className='buttonMenu' onClick={changeSide}>
                {side ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faBars}/>}
            </button>

            <Sidebar open={side}/>
        </header>
    )
}

export default Header