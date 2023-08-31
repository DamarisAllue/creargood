import React from 'react';
import wave from '../assets/wave.svg';
import banner from "../assets/imagenHERO.png"

const Banner = ({fondo}) => { // Añadimos banner como prop
    const containerStyle = {
        position: 'relative',
        height: '400px',
        background: fondo ?  `${fondo} center/cover` :`url(${banner}) center/cover`,
        overflow: 'hidden',
    };

    const waveStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 'auto',
        zIndex: 1,
    };

    return (
        <div className="banner-container" style={containerStyle}>
            <img src={wave} alt="Wave" style={waveStyle} />
        </div>
    );
}

export default Banner;


