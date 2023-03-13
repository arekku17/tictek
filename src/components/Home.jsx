import { Button, ThemeProvider } from '@mui/material'
import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { theme } from '../Theme/Theme';

const Home = () => {
    return (
        <div className='inicio'>

            <div className="bgInicio"></div>
            <img src="img/LOGO TIKTEC.png" alt="logo" className='logo' />
            <p className="place">Champotón, Campeche</p>
            <p className="dateInicio">Mayo 2023</p>
            <ThemeProvider theme={theme}>
                <Button variant="outlined" color="primary" startIcon={<ShoppingBagIcon />} className="buttonBuy" >Comprar Boletos</Button>
            </ThemeProvider>

            <div className="circleContainer">
                <div class="circle"></div>
                <div class="circle2"></div>

                <svg>
                    <filter id="wave">
                        <feTurbulence x="0" y="0" baseFrequency="0.009" numOctaves="5" seed="2">
                            <animate attributeName="baseFrequency" dur="30s" values="0.02;0.005;0.02" repeatCount="indefinite" />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" scale="30" />
                    </filter>
                </svg>
            </div>


        </div>
    )
}

export default Home