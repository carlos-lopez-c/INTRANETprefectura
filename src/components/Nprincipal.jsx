import React, { useState } from 'react';
import '../css/Nprincipal.css';
import IconoNoticia from '../iconos/iconoN.png'

export function Nprincipal(props) {
  const [videoUrl, setVideoUrl] = useState(props.initialVideoUrl); // Inicializa con una URL de video por defecto

  const handleVideoChange = (newUrl) => {
    setVideoUrl(newUrl);
  };

  return (
       
    <div className="center-iframe">
      <div>
        {/* <input
          type="text"
          placeholder="Introduce el enlace del video"
          onChange={(e) => handleVideoChange(e.target.value)}
        />
        <button onClick={() => handleVideoChange(props.initialVideoUrl)}>Restaurar video inicial</button> */}
      </div>     
      <h1 className='Tnotic'><img src={IconoNoticia} alt="ICONO NOTICIA" className='icn'/>Noticia del Día</h1>
      <iframe
        className="notiPrinci"
        src={videoUrl}
        title="NOTICIA DEL DIA"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
