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
                <Button variant="outlined" color="primary" startIcon={<ShoppingBagIcon /> } className="buttonBuy" >Comprar Boletos</Button>
            </ThemeProvider>
        </div>
    )
}

export default Home