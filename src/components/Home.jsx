import { Button, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { theme } from '../Theme/Theme';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import TitleSection from './TitleSection';

const Home = () => {

    const [efectos, setEfectos] = useState(true);

    return (
        <div className='inicio'>

            <div className="bgInicio"></div>
            <img src="img/LOGO TIKTEC.png" alt="logo" className='logo' />
            <p className="place">Champotón, Campeche</p>
            <p className="dateInicio">19 Mayo 2023</p>
            <ThemeProvider theme={theme}>
                <Link to="/boletos">
                    <Button variant="outlined" color="primary" startIcon={<ShoppingBagIcon />} className="buttonBuy" >Comprar Boletos</Button>
                </Link>

            </ThemeProvider>

            <div className="quitarEfecto" onClick={() => setEfectos(!efectos)}>{efectos ? "Quitar efectos" : "Poner efectos"}</div>

            <div className={`circleContainer ${efectos ? "" : "disable"}`}>
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

            <TitleSection title="Tiempo" description="restante para el TikTec 2023"></TitleSection>

            <Countdown
                date={"2023-05-19T16:00:00"}
                renderer={props => {
                    if(props.days === 0){
                        return <div className='contador'>En {props.hours} horas</div>
                    }
                    else if (props.hours === 1){
                        return <div className='contador'>En {props.hours} hora</div>
                    }
                    else{
                        return <div className='contador'>En {props.days} días y {props.hours} horas</div>
                    }
                    
                }}
            />

        </div>
    )
}

export default Home